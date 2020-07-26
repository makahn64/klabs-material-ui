/** *******************************

 File:       restApiService.js
 Function:   Interface to Flask server on Pi
 Copyright:  Bertco LLC
 Date:       2020-06-20
 Author:     mkahn

 ********************************* */

import request from 'superagent';
import {PI_URL} from '../config';

const delay = delayMs => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, delayMs)
	})
};

export const GET = async (url) => request.get(url).then((resp) => resp.body);
export const POST = async (url, json) => request.post(url).send(json).then((resp) => resp.body);
export const PUT = async (url, json) => request.put(url).send(json).then((resp) => resp.body);
export const PATCH = async (url, json) => request.patch(url).send(json).then((resp) => resp.body);
export const DELETE = (url) => request.delete(url).then((resp) => resp.body);

const getStatus = async () => GET(`${PI_URL}/status`);
const connect = async () => POST(`${PI_URL}/connect`);
const disconnect = async () => POST(`${PI_URL}/disconnect`);
const setVoltage = async ({voltage, channel, tolerance = 0.01}) => POST(`${PI_URL}/setv/${channel}/${voltage}/${tolerance}`);
const getVoltage = async (channel) => GET(`${PI_URL}/getv/${channel}`);
const getAllVoltages = async (voltageOnly = true) => {
	const results = await GET(`${PI_URL}/getv/all`);
	return voltageOnly ? results.map(v => v.voltage) : results;
};

export default {
	getStatus,
	connect,
	disconnect,
	setVoltage,
	getVoltage,
	getAllVoltages
};
