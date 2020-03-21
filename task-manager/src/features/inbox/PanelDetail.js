import React, { PureComponent } from 'react';
import PanelItem from './PanelItem';
import app_data from './data/app';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TabPanel from './TabPanel';
import PanelForm from './PanelForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './redux/actions';

class PanelDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tab_value: 0
    }
  }

  handleChange = (event, new_value) => {
    this.setState({ tab_value: new_value })
  }
  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }
  render() {
    let { task_detail } = this.props;
    let panel_index = 0;
    let selected_panel = app_data.task.data[panel_index];
    let { tab_value } = this.state;
    let selected_sub_actions = selected_panel.details.sub_actions;
    if (!task_detail) {
      return null;
    }
    return (
      <div className="text-left">
        <div className="pl-5 flex">
          <div className="text-xl w-1/2 mb-2 mt-3">
            {task_detail.processName} - {task_detail.stepName}
          </div>
          <div className="text-xl text-right w-1/2">{task_detail.createdDate}</div>
        </div>
        <div className="pl-5 flex mb-5">
          <div className="text-xl w-1/2 mb-2 mt-3">{task_detail.taskSubject}</div>
          <div className="text-xl text-right w-1/2">{task_detail.dueDate}</div>
        </div>
        <div className="" >
          <div className="c-panel-detail__tabs" position="static">
            <Tabs textColor="primary" value={tab_value} onChange={this.handleChange} aria-label="simple tabs example">
              <Tab label="Form" {...this.a11yProps(0)} />
              <Tab label="Dcouments" {...this.a11yProps(1)} />
              <Tab label="Comment" {...this.a11yProps(2)} />
              <Tab label="History" {...this.a11yProps(4)} />
              <Tab label="Diagram" {...this.a11yProps(5)} />
            </Tabs>
          </div>
          <TabPanel value={tab_value} index={0}>
            <PanelForm form_data={task_detail.form_data} actions={task_detail.actions} json_form_schema={task_detail.json_form_schema} ui_schema={task_detail.ui_schema} />
          </TabPanel>
          <TabPanel value={tab_value} index={1}>
            Documents
          </TabPanel>
          <TabPanel value={tab_value} index={2}>
            Comment
          </TabPanel>
          <TabPanel value={tab_value} index={3}>
            History
          </TabPanel>
          <TabPanel value={tab_value} index={4}>
            Diagram
          </TabPanel>
        </div>
      </div >
    )
  }
}

function mapStateToProps(state, own_props) {
  return {
    task_detail: state.tasks.task_details[own_props.selected_task_id]
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelDetails);

