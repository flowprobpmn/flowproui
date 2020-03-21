// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import { SEARCH_UPDATE_TASK, FILTER_UPDATE_TASK } from './constants';
import getFilterTasks from '../helpers/get_filter_tasks';
import getSearchedFilterTasks from '../helpers/get_searched_filter_tasks';

export function searchUpdateTask(data) {
  return {
    type: SEARCH_UPDATE_TASK,
    data
  };
}
export function filterUpdateTask(data) {
  return {
    type: FILTER_UPDATE_TASK,
    data
  }
}

export function reducer(state, action) {
  switch (action.type) {
    case SEARCH_UPDATE_TASK:
      let original_task_list = [];
      if (!state.original_task_list.length) {
        original_task_list = state.task_list.data.slice(0);
      } else {
        original_task_list = state.original_task_list;
      }
      let updated_task_list = getSearchedFilterTasks(action.data.keyword, original_task_list);
      return {
        ...state,
        task_list: {
          ...state.task_list.meta,
          data: updated_task_list
        },
        original_task_list
      };
    case FILTER_UPDATE_TASK:
      if (!state.original_task_list.length) {
        original_task_list = state.task_list.data.slice(0);
      } else {
        original_task_list = state.original_task_list;
      }
      let updated_filter_task_list = getFilterTasks(action.data.processName, action.data.stepName, original_task_list);
      return {
        ...state,
        task_list: {
          ...state.task_list.meta,
          data: updated_filter_task_list
        },
        original_task_list
      }
    default:
      return state;
  }
}
