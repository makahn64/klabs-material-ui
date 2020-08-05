import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
	Avatar,
	Box,
	Card,
	Typography,
	makeStyles,
	Button
} from '@material-ui/core';
import {ThumbsUp, ThumbsDown} from 'react-feather';
import useHardware from '../../../hooks/useHardware';

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
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.secondary.contrastText,
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

function HardwareStatus({className, ...rest}) {

	const classes = useStyles();
	const {isConnected, status, connect, disconnect} = useHardware();

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
					Hardware Status
				</Typography>
				<Box
					display="flex"
					alignItems="center"
					flexWrap="wrap"
				>
					<Typography
						variant="h3"
						color={isConnected ? 'success' : 'error'}
					>
						{status.toUpperCase()}
					</Typography>
				</Box>
				<Box>
					{isConnected ?
						<Button onClick={() => disconnect()}>Click Here to Disconnect</Button> :
						<Button onClick={() => connect()}>Click Here to Connect to Test Unit</Button>}
				</Box>
			</Box>
			<Avatar className={isConnected ? classes.avatar : classes.bavatar}>
				{isConnected ? <ThumbsUp/> : <ThumbsDown/>}
			</Avatar>
		</Card>
	);
}

HardwareStatus.propTypes = {
	className: PropTypes.string
};

export default HardwareStatus;
