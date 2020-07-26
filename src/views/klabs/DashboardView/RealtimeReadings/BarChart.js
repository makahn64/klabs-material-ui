import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {Line, Bar, HorizontalBar} from 'react-chartjs-2';
import {
	fade,
	makeStyles,
	useTheme
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		position: 'relative'
	}
}));


function BarChart({
								 className,
								 data: dataProp,
								 labels,
								 ...rest
							 }) {
	const classes = useStyles();
	const theme = useTheme();

	const data2 = {
		labels: ['V Out', 'Ch 1', 'Ch 2', 'Ch 3',
			'Ch 4', 'Ch 5', 'Ch 6', 'Ch 7'],
		datasets: [
			{
				backgroundColor: 'rgba(98,40,255,0.85)',
				borderColor: 'rgb(177,112,255)',
				borderWidth: 2,
				hoverBackgroundColor: 'rgba(255,99,132,0.4)',
				hoverBorderColor: 'rgb(121,14,255)',
				data: dataProp,
			}
		]
	};

	const options = {
		scales: {
			xAxes: [{
				ticks: {
					min: -0.5,
					max: 5.0,
					stepSize: 0.25
				}
			}]
		},
		legend: {
			display: false
		},
	};

	console.log('----');
	console.log(dataProp);

	return (
		<div
			className={clsx(classes.root, className)}
			{...rest}
		>
			<Bar data={data2} options={options}/>
		</div>
	);
}

BarChart.propTypes = {
	className: PropTypes.string,
	data: PropTypes.array.isRequired,
	labels: PropTypes.array.isRequired
};

export default BarChart;
