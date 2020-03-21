import React, { PureComponent } from 'react';
import PanelItem from './PanelItem';
import app_data from './data/app';
import { JsonForms } from '@jsonforms/react';
import Button from '@material-ui/core/Button';

import {
  materialRenderers,
  materialCells
} from '@jsonforms/material-renderers';

class PanelForm extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    // let panel_data = app_data.task.data;
    let { json_form_schema, ui_schema, form_data, actions } = this.props;
    return (
      <div className="text-left pl-5 c-panel-form">
        <JsonForms
          schema={json_form_schema}
          uischema={ui_schema}
          data={form_data}
          renderers={materialRenderers}
          cells={materialCells}
        />
        <div className="text-right mt-5 flex justify-end">
          {
            actions.map((action) => {
              return (
                <div className="ml-3">
                  <Button className={`form-action-btn ${action.style === 'reject' ? 'no-btn' : 'yes-btn'}`} variant="contained" color="primary">
                    {action.name}
                  </Button>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default PanelForm