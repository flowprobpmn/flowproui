import React, { PureComponent, Fragment } from 'react';
import { SearchBox, SelectBox } from '../widgets';
import { PanelItem, Drawer } from './';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';


class Panel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected_process: "",
      selected_steps: [],
      selected_task_id: ""
    }
  }
  handleSelectProcess = (selected_process) => {
    this.setState({
      selected_process,
      selected_steps: this.props.steps_data[selected_process],
      reset_select: true
    });
    let selected_process_obj = this.props.process_list.filter((process) => {
      return process.name === selected_process
    })
    this.props.actions.filterUpdateTask({
      processName: selected_process_obj.length ? selected_process_obj[0].label : "",
      stepName: ""
    });
  }
  handlePanelSelect = (selected_task_id) => {
    this.setState({
      selected_task_id
    });
  }
  handleResetSelect = () => {
    this.setState({
      reset_select: false
    })
  }
  handleStepSelect = (selected_step) => {
    let selected_process_obj = this.props.process_list.filter((process) => {
      return process.name === this.state.selected_process
    })
    let selected_step_obj = this.state.selected_steps.filter((step) => {
      return step.name === selected_step
    })
    this.props.actions.filterUpdateTask({
      processName: selected_process_obj.length ? selected_process_obj[0].label : "",
      stepName: selected_step_obj.length ? selected_step_obj[0].label : ""
    });
  }
  handleSearchChange = (keyword) => {
    this.props.actions.searchUpdateTask({ keyword });
  }
  getDrawerItems = (selected_task_id) => {
    let drawer_items = [
      {
        type: 'data',
        component: (
          <Fragment>
            <div className="mb-2">
              <SearchBox handleSearchChange={this.handleSearchChange} />
            </div>
            <div className="c-panel__select">
              <div className="inline-block w-1/2 pr-2">
                <SelectBox placeholder="Process" onSelectChange={this.handleSelectProcess} className="panel-select-box" select_options={this.props.process_list} />
              </div>
              <div className="inline-block w-1/2 pl-2">
                <SelectBox onSelectChange={this.handleStepSelect} handleResetSelect={this.handleResetSelect} reset_select={this.state.reset_select} placeholder="Steps" select_options={this.state.selected_steps} />
              </div>
            </div>
          </Fragment>
        )
      }
    ];
    this.props.task_list.map((item) => {
      drawer_items.push({
        type: 'data',
        is_selected: !!(selected_task_id === item.raw.id),
        component: (<PanelItem onClick={this.handlePanelSelect.bind(null, item.raw.id)} task={item.ui} />)
      });
    })
    // drawer_items.push();
    return drawer_items;
  }
  render() {
    let selected_task_id = this.state.selected_task_id || (this.props.task_list.length && this.props.task_list[0].raw.id);
    return (
      <Drawer selected_task_id={selected_task_id} items={this.getDrawerItems(selected_task_id)} hide_app_bar={true} is_open={true} />
    )
  }
}

function mapStateToProps(state) {
  return {
    process_list: state.tasks.process_list.data,
    steps_data: state.tasks.steps_data.data
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
