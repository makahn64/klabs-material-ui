/*********************************

 File:       useHardware.js
 Function:   Yep, that's it man
 Copyright:  Bertco LLC
 Date:       2020-06-20
 Author:     mkahn

 **********************************/

// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import API from '../services/restApiService';

const useHardware = () => {

	const [status, setStatus] = useState('offline');

	useEffect(() => {
		async function getStatus() {
			const s = await API.getStatus();
			setStatus(s.status);
		}

		getStatus();

	}, []);

	const connect = async () => {
		const s = await API.connect();
		setStatus(s.status);
	};

	const disconnect = async () => {
		const s = await API.disconnect();
		setStatus(s.status);
	};

	const getAllVoltages = async () => {
		//if (status !== 'online') return [0, 0, 0, 0, 0, 0, 0,];
		return await API.getAllVoltages();
	};

	return {isConnected: status === 'online', status, connect, disconnect, getAllVoltages, getVoltage: API.getVoltage};

};

export default useHardware;
