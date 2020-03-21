import React, { PureComponent } from 'react';

class PanelItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  onPanelClick = () => {
    this.props.onClick && this.props.onClick();
  }
  render() {
    let { task, is_selected } = this.props;
    // const panel = {
    //   heading: 'Task Name',
    //   sub_heading: 'Process Name',
    //   task_subject: 'Task Subject',
    //   created_date: 'Created Date'
    // }
    return (
      <div className={`c-panel-item`} onClick={this.onPanelClick}>
        <div className="text-2xl mb-2">{task.heading.value}</div>
        <div className="text-sm">{task.sub_heading.value}</div>
        <div className="flex text-sm">
          <div className="w-1/2">
            <div className="">{task.line_1.value}</div>
          </div>
          <div className="w-1/2 text-sm">
            <div className="">{task.line_2.value}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default PanelItem