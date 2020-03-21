import axios from 'axios';
import {
  FETCH_TASKS_BEGIN,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE
} from './constants';
import task_data from '../data/task_data';
import getJsonFormSchema from '../helpers/get_json_form_schema';
import getUiSchema from '../helpers/get_ui_schema';


// Rekit uses redux-thunk for async actions by default: https://github.com/gaearon/redux-thunk
// If you prefer redux-saga, you can use rekit-plugin-redux-saga: https://github.com/supnate/rekit-plugin-redux-saga
export function fetchTaskData(args = {}) {
  return dispatch => {
    // optionally you can have getState as the second argument
    dispatch({
      type: FETCH_TASKS_BEGIN,
    });

    // Return a promise so that you could control UI flow without states in the store.
    // For example: after submit a form, you need to redirect the page to another when succeeds or show some errors message if fails.
    // It's hard to use state to manage it, but returning a promise allows you to easily achieve it.
    // e.g.: handleSubmit() { this.props.actions.submitForm(data).then(()=> {}).catch(() => {}); }
    const promise = new Promise((resolve, reject) => {
      // doRequest is a placeholder Promise. You should replace it with your own logic.
      // See the real-word example at:  https://github.com/supnate/rekit/blob/master/src/features/home/redux/fetchRedditReactjsList.js
      // args.error here is only for test coverage purpose.
      const doRequest = axios.get('http://www.example.com/dummy');

      doRequest.then(
        res => {
          res = task_data;
          dispatch({
            type: FETCH_TASKS_SUCCESS,
            data: res,
          });
          resolve(res);
        },
        // Use rejectHandler as the second argument so that render errors won't be caught.
        err => {
          let res = task_data;
          // dispatch({
          //   type: FETCH_TASKS_FAILURE,
          //   data: { error: err },
          // });
          // reject(err);
          dispatch({
            type: FETCH_TASKS_SUCCESS,
            data: res
          });
          resolve(res);
        }
      );
    });

    return promise;
  };
}


export function reducer(state, action) {
  switch (action.type) {
    case FETCH_TASKS_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        fetchTasksPending: true,
        fetchTasksError: null,
      };

    case FETCH_TASKS_SUCCESS:
      // The request is success
      let menus = [];
      menus = action.data.login.menus;
      let task_list_data = action.data.taskList.map((task) => {
        return {
          raw: {
            id: task.taskId,
            processName: task.processName,
            stepName: task.stepName
          },
          ui: {
            id: task.taskId,
            heading: {
              key: 'taskName',
              value: task.taskName
            },
            sub_heading: {
              key: 'processName',
              value: task.processName
            },
            line_1: {
              key: 'taskSubject',
              value: task.taskSubject
            },
            line_2: {
              key: 'createdData',
              value: task.createdDate
            }

          }
        }
      });
      let steps_data = {};
      let process_list = action.data.processStepList.map((item) => {
        steps_data[item.id] = item.steps;
        return {
          name: item.id,
          label: item.name
        }
      });
      let task_details = {};
      let launch_process_list = [];
      launch_process_list = action.data.login.launchProcessList.map((item) => {
        return {
          name: item.id,
          label: item.processName
        }
      });
      action.data.taskDetails.map((item) => {
        let form_data = {};
        task_details[item.taskId] = item;
        task_details[item.taskId].json_form_schema = getJsonFormSchema({
          fields: item.formData.fields,
          choicelist: item.formData.choicelist
        });
        item.formData.fields.map((field) => {
          if (field.value) {
            form_data[field.name] = field.value;
          }
        });
        task_details[item.taskId].form_data = form_data;
        task_details[item.taskId].actions = item.formData.actions.map((action) => {
          return {
            name: action.name,
            style: action.style
          }
        })
        task_details[item.taskId].ui_schema = getUiSchema({
          fields: item.formData.fields,
          choicelist: item.formData.choicelist
        });
      })
      return {
        ...state,
        menus,
        task_list: {
          meta: {
            ...state.task_list.meta
          },
          data: task_list_data
        },
        process_list: {
          meta: {
            ...state.process_list.meta
          },
          data: process_list
        },
        steps_data: {
          meta: {
            ...state.steps_data.meta
          },
          data: steps_data
        },
        task_details,
        launch_process_list: {
          meta: {
            ...state.launch_process_list.meta
          },
          data: launch_process_list
        },
        fetchTasksPending: false,
        fetchTasksError: null,
      };

    case FETCH_TASKS_FAILURE:
      // The request is failed
      return {
        ...state,
        menus,
        task_list: {
          meta: {
            ...state.task_list.meta
          },
          data: task_list_data
        },
        process_list: {
          meta: {
            ...state.process_list.meta
          },
          data: process_list
        },
        steps_data: {
          meta: {
            ...state.steps_data.meta
          },
          data: steps_data
        },
        task_details,
        launch_process_list: {
          meta: {
            ...state.launch_process_list.meta
          },
          data: launch_process_list
        },
        fetchTasksPending: false,
        // fetchTasksError: action.data.error,
      };

    default:
      return state;
  }
}
