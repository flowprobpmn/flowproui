import initialState from './initialState';
import { reducer as taskReducer } from './fetch_app_data';
import { reducer as updataTaskReducer } from './updateTasks';

const reducers = [
  taskReducer,
  updataTaskReducer
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
