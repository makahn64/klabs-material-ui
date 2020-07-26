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

const useStyles = makeStyles(() => ({
  root: {
    height: 500
  },
  chart: {
    height: '100%'
  }
}));

function RealtimeReadings({ className, ...rest }) {
  const classes = useStyles();
  const [ voltageLevels, setVoltageLevels] = useState([0,0,0,0,0,0,0,0]);
  const [ v0, setV0] = useState(0);
  const [ voltageHistory, setVoltageHistory] = useState([]);


  const { getAllVoltages, isConnected } = useHardware();

  useEffect(()=> {
    const interval = setInterval(()=>{
      console.log('Reading voltages');
      getAllVoltages()
        .then( vs => {
          setVoltageLevels(vs);
          setV0(vs[0]);
          setVoltageHistory([...voltageHistory, vs]);
          console.log(vs);
        })
        .catch( e => console.error(e.message));

    }, 5000);

    return () => clearInterval(interval);
  }, [ voltageHistory ])

  if (!isConnected) return null;

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Current Voltage Levels"
      />
      <Divider />
      <CardContent>
        <PerfectScrollbar>
          <Box
            height={600}
            minWidth={500}
          >
            {/*<BarChart*/}
            {/*  className={classes.chart}*/}
            {/*  data={voltageLevels}*/}
            {/*  labels={[]}*/}
            {/*/>*/}
            <MultiLineChart data={voltageHistory}/>
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
