import React, { PureComponent } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { SelectBox, DrawerMenu } from '../widgets';
import Grid from '@material-ui/core/Grid';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './redux/actions';

class Navigation extends PureComponent {
  constructor(props) {
    super(props);
    this.select_options = [
      {
        label: 'Start Process',
        value: 'start_process'
      },
      {
        label: 'Start Process',
        value: 'start_process'
      },
      {
        label: 'Start Process',
        value: 'start_process'
      }
    ]
  }
  render() {
    return (
      <div>
        <CssBaseline />
        <DrawerMenu />
        <AppBar
          position="fixed"
          className=""
        >
          <Toolbar>
            <Grid xs={6} item className="text-left pl-6">
              <Typography variant="h6" noWrap>
                Task Manager Logo
          </Typography>
            </Grid>
            <Grid xs={6} item className="text-right">
              <SelectBox placeholder="Start Process" select_options={this.props.launch_process_list || []} />
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    launch_process_list: state.tasks.launch_process_list.data
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
