import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
	Box,
	Card,
	CardHeader,
	CardContent,
	Divider,
	makeStyles
} from '@material-ui/core';
import GenericMoreButton from 'src/components/GenericMoreButton';
import BarChart from './BarChart';
import useHardware from "../../../../hooks/useHardware";
import MultiLineChart from "./MultiLineChart";
import RTRMoreButton from "./RealtimeReadingsMoreButton";
import useInterval from "../../../../hooks/useInterval";
import Chip from '@material-ui/core/Chip';
import fileDownload from "js-file-download";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DataTable from "./DataTable";

const useStyles = makeStyles(() => ({
	root: {
		//height: 1500
	},
	chart: {
		height: '100%'
	}
}));

function RealtimeReadings({className, ...rest}) {
	const classes = useStyles();
	const [voltageLevels, setVoltageLevels] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
	const [v0, setV0] = useState(0);
	const [voltageHistory, setVoltageHistory] = useState([]);
	const [isSampling, setIsSampling] = useState(true);
	const [chartType, setChartType] = useState('line');
	const [delay, setDelay] = useState(5000);

	const {getAllVoltages, isConnected} = useHardware();

	useInterval(() => {

		if (isSampling) {
			console.log('Reading voltages');
			getAllVoltages()
				.then(vs => {
					setVoltageLevels(vs);
					setV0(vs[0]);
					setVoltageHistory([...voltageHistory, vs]);
					console.log(vs);
				})
				.catch(e => console.error(e.message));
		}
	}, delay);

	const handleChartToggle = () => {
		console.log(`Toggling chart from ${chartType}`);
		if (chartType === 'line') setChartType('bar');
		if (chartType === 'bar') setChartType('line');
	};

	const handleSave = () => {
		fileDownload(JSON.stringify(voltageHistory), 'sample-history.json');
	};

	if (!isConnected) return null;

	return (
		<Card
			className={clsx(classes.root, className)}
			{...rest}
		>
			<CardHeader
				action={<RTRMoreButton
					onStart={() => setIsSampling(true)}
					onStop={() => {
						console.log('Burp!');
						setIsSampling(false);
					}}
					onChartToggle={handleChartToggle}
					isSampling={isSampling}
					onSave={handleSave}
					chartChoiceLabel={chartType === 'line' ? 'Show bar chart' : 'Show line chart'}/>}
				title={`Current Voltage Levels [${voltageHistory.length}]`}
			/>
			<Divider/>
			<CardContent>
				<PerfectScrollbar>
					<Box>
						<Chip label={isSampling ? 'Sampling' : 'Not Sampling'} color="primary" style={{marginBottom: '10px'}}/>
            { voltageHistory.length ? <DataTable voltageHistory={voltageHistory[voltageHistory.length-1].map(v=>v.toFixed(3))}/> : null }
						{chartType === 'line' ? <MultiLineChart data={voltageHistory}/>
							: <BarChart
								className={classes.chart}
								data={voltageLevels}/>}

					</Box>
				</PerfectScrollbar>
			</CardContent>
		</Card>
	);
}

RealtimeReadings.propTypes = {
	className: PropTypes.string
};

export default RealtimeReadings;
