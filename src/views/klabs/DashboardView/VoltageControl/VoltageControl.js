import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
	Avatar,
	Box,
	Card,
	Typography,
	makeStyles,
	Button,
	Slider
} from '@material-ui/core';
import {BatteryCharging} from 'react-feather';
import useHardware from '../../../../hooks/useHardware';
import api from '../../../../services/restApiService';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3),
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	label: {
		marginLeft: theme.spacing(1)
	},
	avatar: {
		backgroundColor: 'orange',
		color: theme.palette.primary.contrastText,
		height: 48,
		width: 48
	},
	bavatar: {
		backgroundColor: 'red',
		color: theme.palette.error,
		height: 48,
		width: 48
	}
}));

function VoltageControl({className, ...rest}) {

	const classes = useStyles();
	const {getVoltage, isConnected} = useHardware();
	const [v0, setV0] = useState(0);

	// useEffect(()=> {
	// 	getV0();
	// 	const i = setInterval(getV0, 1000);
	// 	return () => { clearInterval(i)};
	// }, []);
	//
	// const getV0 = async () => {
	// 	const v = await getVoltage(0);
	// 	setV0(v.voltage);
	// };

	const handleSetVoltage = async (ev,volts) => {
		const res = await api.setVoltage({voltage: volts, channel: 0, tolerance: 0.001});
		console.log(res);
	};

	return (
		<Card
			className={clsx(classes.root, className)}
			{...rest}
		>
			<Box flexGrow={1}>
				<Typography
					component="h3"
					gutterBottom
					variant="overline"
					color="textSecondary"
				>
					Voltage Control
				</Typography>
				<Box
					display="flex"
					alignItems="center"
					flexWrap="wrap"
				>
					<Typography
						variant="h3"
						color={'success'}
					>

					</Typography>
				</Box>
				<Box>
					<Slider
						defaultValue={0.1}
						step={0.1}
						marks
						min={0}
						max={3.3}
						valueLabelDisplay="auto"
						onChangeCommitted={handleSetVoltage}
					/>
				</Box>
			</Box>
			<Avatar className={classes.avatar}>
				<BatteryCharging/>
			</Avatar>
		</Card>
	);
}

VoltageControl.propTypes = {
	className: PropTypes.string
};

export default VoltageControl;
