import React from 'react';
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
import { SelectBox } from '../widgets';
import Grid from '@material-ui/core/Grid';
import { PanelDetail } from './';

const drawerWidth = '30%';
const leftMenuWidth = '73px';
const select_options = [
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

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    top: '69px',
    left: '83px',
    border: '1px solid #b4b4be',
    position: 'absolute',
    marginRight: '36px',
    color: '#FFFFFF',
    padding: '5px',
    borderRadius: '3px',
    backgroundColor: '#3f51b5'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    top: '65px',
    left: '73px'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `calc(-30% + ${leftMenuWidth})`
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: leftMenuWidth,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

const DrawerWrapper = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  let default_drawer_items = [
    {
      type: 'text',
      component: 'Inbox',
      icon: ''
    },
    {
      type: 'text',
      component: 'Starred',
      icon: ''
    },
    {
      type: 'text',
      component: 'Drafts',
      icon: ''
    }
  ];

  let drawer_items = props.items || default_drawer_items;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getAppBar = () => {
    if (props.hide_app_bar) {
      return null;
    }
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Grid xs={6} item className="text-left">
              <Typography variant="h6" noWrap>
                Task Manager Logo
          </Typography>
            </Grid>
            <Grid xs={6} item className="text-right">
              <SelectBox select_options={select_options} />
            </Grid>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    )
  }

  return (
    <div className={classes.root}>
      {/* {getAppBar()} */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={`drawer-open-icon ${clsx(classes.menuButton, open && classes.hide)}`}
      >
        <ChevronRightIcon />
      </IconButton>
      <Drawer
        variant="persistent"
        className={classes.drawer}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>

          {drawer_items.map((item, index) => (
            <div className={`c-panel__wrapper text-left border-b-2 p-5 ${item.is_selected ? `selected` : ``}`}>
              {item.component}
            </div>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <PanelDetail selected_task_id={props.selected_task_id} />
      </main>
    </div >
  );
}

export default DrawerWrapper;
