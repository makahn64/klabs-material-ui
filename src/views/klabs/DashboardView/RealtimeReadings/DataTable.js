import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {Box} from "@material-ui/core";

const DataTable = props => {

	const { voltageHistory } = props;

		return (
			<TableContainer component={Paper}>
				<Table aria-label="voltage table">
					<TableHead>
						<TableRow>
							<TableCell>V Out</TableCell>
							<TableCell align="right">V1</TableCell>
							<TableCell align="right">V2</TableCell>
							<TableCell align="right">V3</TableCell>
							<TableCell align="right">V4</TableCell>
							<TableCell align="right">V5</TableCell>
							<TableCell align="right">V6</TableCell>
							<TableCell align="right">V7</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
							<TableRow>
								<TableCell component="th" scope="row">
									{voltageHistory[0]}
								</TableCell>
								<TableCell align="right">{voltageHistory[1]}</TableCell>
								<TableCell align="right">{voltageHistory[2]}</TableCell>
								<TableCell align="right">{voltageHistory[3]}</TableCell>
								<TableCell align="right">{voltageHistory[4]}</TableCell>
								<TableCell align="right">{voltageHistory[5]}</TableCell>
								<TableCell align="right">{voltageHistory[6]}</TableCell>
								<TableCell align="right">{voltageHistory[7]}</TableCell>
							</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		);
}

DataTable.propTypes = {
	voltageHistory: PropTypes.array
};

export default DataTable;
