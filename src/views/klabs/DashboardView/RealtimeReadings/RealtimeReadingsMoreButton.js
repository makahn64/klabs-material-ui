import React, {
  useRef,
  useState,
  memo
} from 'react';
import PropTypes from 'prop-types';
import {
  ListItemIcon,
  ListItemText,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  makeStyles
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import GetAppIcon from '@material-ui/icons/GetApp';
import StartIcon from '@material-ui/icons/PlayCircleFilled';
import StopIcon from '@material-ui/icons/StopOutlined';
import ChartIcon from '@material-ui/icons/InsertChart';
import AchiveIcon from '@material-ui/icons/ArchiveOutlined';

const useStyles = makeStyles(() => ({
  menu: {
    width: 256,
    maxWidth: '100%'
  }
}));

function RTRMoreButton(props) {
  const classes = useStyles();
  const moreRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const { onChartToggle, chartChoiceLabel, onSave, onStart, onStop, isSampling } = props;

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <Tooltip title="More options">
        <IconButton
          {...props}
          onClick={handleMenuOpen}
          ref={moreRef}
        >
          <MoreIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={moreRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        onClose={handleMenuClose}
        open={openMenu}
        PaperProps={{ className: classes.menu }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <GetAppIcon />
          </ListItemIcon>
          <ListItemText primary="Save Readings" onClick={onSave} />
        </MenuItem>
        { isSampling ?
          <MenuItem>
            <ListItemIcon>
              <StopIcon />
            </ListItemIcon>
            <ListItemText primary="Stop Sampling" onClick={onStop}/>
          </MenuItem>

        : <MenuItem>
          <ListItemIcon>
            <StartIcon />
          </ListItemIcon>
          <ListItemText primary="Start Sampling" onClick={onStart}/>
        </MenuItem> }

        <MenuItem>
          <ListItemIcon>
            <ChartIcon />
          </ListItemIcon>
          <ListItemText primary={chartChoiceLabel} onClick={onChartToggle} />
        </MenuItem>
      </Menu>
    </>
  );
}

RTRMoreButton.propTypes = {
  className: PropTypes.string,
  onSave: PropTypes.func,
  onStop: PropTypes.func,
  onStart: PropTypes.func,
  onChartToggle: PropTypes.func,
  chartChoiceLabel: PropTypes.string,
  isSampling: PropTypes.bool
};

RTRMoreButton.defaultProps = {
  onSave: () => console.log('save'),
  onStop: () => console.log('stop'),
  onStart: () => console.log('start'),
  onChartToggle: () => console.log('toggle'),
  chartChoiceLabel: 'Change Chart',
  isSampling: true
};

export default memo(RTRMoreButton);
