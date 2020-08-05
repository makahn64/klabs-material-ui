/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Chip,
  Divider,
  Drawer,
  Hidden,
  Link,
  List,
  ListSubheader,
  Typography,
  makeStyles
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import {
  Briefcase as BriefcaseIcon,
  BarChart as BarChartIcon,
  Shield as ShieldIcon,
  AlertCircle as AlertCircleIcon,
  Edit as EditIcon,
  Droplet as DropletIcon,
  Terminal as TerminalIcon,
  PlayCircle as PlayIcon,
  PenTool as PenIcon,
  Power as PowerIcon,
  Hexagon as HexIcon,
  PieChart as PieChartIcon,
  Users as UsersIcon
} from 'react-feather';
import Logo from 'src/components/Logo';
import NavItem from './NavItem';

/*
Dash
Run Test Case
Design Test Case
Experiment
H/W Setup
Help
 */

const navConfig = [
  {
    // subheader: 'Reports',
    items: [
      {
        title: 'Dashboard',
        icon: PieChartIcon,
        href: '/app/dashboard'
      },
      {
        title: 'Manual Control',
        icon: PowerIcon,
        href: '/app/manualcontrol'
      },
    ]
  },
  {
    // subheader: 'Test Cases',
    items: [
      {
        title: 'Test Cases',
        icon: BriefcaseIcon,
        href: '/app/testcase',
        items: [
          {
            icon: PlayIcon,
            title: 'Run Test Case',
            href: '/app/testcase/run'
          },
          {
            icon: PenIcon,
            title: 'Design Test Case',
            href: '/app/testcase/design'
          },
        ]
      },
      {
        title: 'Help',
        icon: PieChartIcon,
        href: '/help'
      }
    ]
  }
];

function renderNavItems({ items, ...rest }) {
  return (
    <List disablePadding>
      {items.reduce(
			  (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
			  []
      )}
    </List>
  );
}

function reduceChildRoutes({
														 acc,
														 pathname,
														 item,
														 depth = 0
													 }) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        key={key}
        info={item.info}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
				  depth: depth + 1,
				  pathname,
				  items: item.items
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        key={key}
        info={item.info}
        title={item.title}
      />
    );
  }

  return acc;
}

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

function NavBar({ openMobile, onMobileClose, }) {
  const classes = useStyles();
  const location = useLocation();
  //const { user } = useSelector((state) => state.account);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line
	}, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box
            p={2}
            display="flex"
            justifyContent="center"
          >
            <RouterLink to="/">
              <Logo style={{width: '70%', margin: '0 auto'}}/>
            </RouterLink>
          </Box>
        </Hidden>
        <Divider />
        <Box p={2}>
          {navConfig.map((config) => (
            <List
              key={config.subheader}
              subheader={(
                <ListSubheader
                  disableGutters
                  disableSticky
                >
                  {config.subheader}
                </ListSubheader>
							)}
            >
              {renderNavItems({ items: config.items, pathname: location.pathname })}
            </List>
          ))}
        </Box>
        <Divider />
        {/*<Box p={2}>*/}
        {/*  <Box*/}
        {/*    p={2}*/}
        {/*    borderRadius="borderRadius"*/}
        {/*    bgcolor="background.dark"*/}
        {/*  >*/}
        {/*    <Typography*/}
        {/*      variant="h6"*/}
        {/*      color="textPrimary"*/}
        {/*    >*/}
        {/*      Need Help?*/}
        {/*    </Typography>*/}
        {/*    <Link*/}
        {/*      variant="subtitle1"*/}
        {/*      color="secondary"*/}
        {/*      component={RouterLink}*/}
        {/*      to="/docs"*/}
        {/*    >*/}
        {/*      Check our docs*/}
        {/*    </Link>*/}
        {/*  </Box>*/}
        {/*</Box>*/}
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
}

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
