import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import LatestProjects from './LatestProjects';
import NewProjects from './NewProjects';
import PerformanceOverTime from './PerformanceOverTime';
import RealTime from './RealTime';
import RoiPerCustomer from './RoiPerCustomer';
import SystemHealth from './SystemHealth';
import TeamTasks from './TeamTasks';
import TodaysMoney from './TodaysMoney';
import {SHOW_TEST_BORDERS} from "../../../config";
import HardwareStatus from "./HardwareStatus";
import RealtimeReadings from "./RealtimeReadings";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    border: SHOW_TEST_BORDERS ? '1px dashed red' : undefined
  },
  container: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 64,
      paddingRight: 64
    }
  }
}));

function DashboardView() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container
        maxWidth={false}
        className={classes.container}
      >
        <Header />
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={6}
            sm={6}
            xs={12}
          >
            <HardwareStatus />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
          </Grid>
          <Grid
            item
            lg={3}
            xs={12}
          >
          </Grid>
          <Grid
            item
            lg={9}
            xs={12}
          >
            <RealtimeReadings />
          </Grid>
          <Grid
            item
            lg={5}
            xl={4}
            xs={12}
          >
          </Grid>
          <Grid
            item
            lg={7}
            xl={8}
            xs={12}
          >
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardView;
