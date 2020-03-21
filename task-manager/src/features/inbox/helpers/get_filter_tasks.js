const getFilterTasks = (processName, stepName, tasks) => {
  let process_filter_tasks = [],
    step_filter_tasks = [];
  if (processName) {
    process_filter_tasks = tasks.filter((task) => {
      return task.raw.processName === processName;
    })
  } else {
    return tasks;
  }
  if (stepName) {
    step_filter_tasks = (process_filter_tasks.length ? process_filter_tasks : []).filter((task) => {
      return task.raw.stepName === stepName;
    });
    return step_filter_tasks;
  } else {
    return process_filter_tasks;
  }
}

export default getFilterTasks;
