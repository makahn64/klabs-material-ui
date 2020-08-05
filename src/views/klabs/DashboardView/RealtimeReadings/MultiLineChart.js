import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {Line, Bar} from 'react-chartjs-2';
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


function MultiLineChart({
								 className,
								 data: dataProp,
								 labels,
								 ...rest
							 }) {
	const classes = useStyles();
	const theme = useTheme();

	const v0points = dataProp.map( reading => reading[0]);
	const v1points = dataProp.map( reading => reading[1]);
	const v2points = dataProp.map( reading => reading[2]);


	const data2 = {
		labels: dataProp.map((x, idx) => `${idx}`),
		datasets: [
			{
				//backgroundColor: 'rgba(98,40,255,0.85)',
				label: 'V Out',
				borderColor: 'rgb(255,0,75)',
				borderWidth: 2,
				hoverBackgroundColor: 'rgba(255,99,132,0.4)',
				hoverBorderColor: 'rgb(121,14,255)',
				data: v0points,
			},
			{
				//backgroundColor: 'rgba(255,130,125,0.85)',
				label: 'V1',
				borderColor: 'rgb(255,174,44)',
				borderWidth: 2,
				hoverBackgroundColor: 'rgba(255,99,132,0.4)',
				hoverBorderColor: 'rgb(121,14,255)',
				data: v1points,
			},
			{
				//backgroundColor: 'rgba(255,130,125,0.85)',
				label: 'V2',
				borderColor: 'rgb(255,247,94)',
				borderWidth: 2,
				hoverBackgroundColor: 'rgba(255,99,132,0.4)',
				hoverBorderColor: 'rgb(121,14,255)',
				data: v2points,
			},
			{
				//backgroundColor: 'rgba(255,130,125,0.85)',
				label: 'V3',
				borderColor: 'rgb(121,255,80)',
				borderWidth: 2,
				hoverBackgroundColor: 'rgba(255,99,132,0.4)',
				hoverBorderColor: 'rgb(121,14,255)',
				data: dataProp.map( reading => reading[3]),
			},
			{
				//backgroundColor: 'rgba(255,130,125,0.85)',
				label: 'V4',
				borderColor: 'rgb(80,180,255)',
				borderWidth: 2,
				hoverBackgroundColor: 'rgba(255,99,132,0.4)',
				hoverBorderColor: 'rgb(121,14,255)',
				data: dataProp.map( reading => reading[4]),
			},
			{
				//backgroundColor: 'rgba(255,130,125,0.85)',
				label: 'V5',
				borderColor: 'rgb(47,29,255)',
				borderWidth: 2,
				hoverBackgroundColor: 'rgba(255,99,132,0.4)',
				hoverBorderColor: 'rgb(121,14,255)',
				data: dataProp.map( reading => reading[5]),
			},
			{
				//backgroundColor: 'rgba(255,130,125,0.85)',
				label: 'V6',
				borderColor: 'rgb(190,20,255)',
				borderWidth: 2,
				hoverBackgroundColor: 'rgba(255,99,132,0.4)',
				hoverBorderColor: 'rgb(121,14,255)',
				data: dataProp.map( reading => reading[6]),
			},
			{
				//backgroundColor: 'rgba(255,130,125,0.85)',
				label: 'V7',
				borderColor: 'rgb(225,212,255)',
				borderWidth: 2,
				hoverBackgroundColor: 'rgba(255,99,132,0.4)',
				hoverBorderColor: 'rgb(121,14,255)',
				data: dataProp.map( reading => reading[7]),
			},
		]
	};

	console.log(data2)

	const options = {
		scales: {
			yAxes: [{
				ticks: {
					min: -0.5,
					max: 3.4,
					stepSize: 0.25
				}
			}]
		},
		legend: {
			display: true
		},
	};

	console.log('----');
	console.log(dataProp);

	return (
		<div
			className={clsx(classes.root, className)}
			{...rest}
		>
			{/*<p>{JSON.stringify(dataProp)}</p>*/}
			{/*<p>Entries {dataProp.length}</p>*/}
			<Line data={data2} options={options}/>
		</div>
	);
}

MultiLineChart.propTypes = {
	className: PropTypes.string,
	data: PropTypes.array.isRequired,
};

export default MultiLineChart;
