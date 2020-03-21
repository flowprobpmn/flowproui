const getSearchedFitlerTasks = (keyword, tasks) => {
  keyword = keyword.toLowerCase();
  return tasks.filter((task) => {
    return task.ui.heading.value.toLowerCase().includes(keyword) ||
      task.ui.sub_heading.value.toLowerCase().includes(keyword) ||
      task.ui.line_1.value.toLowerCase().includes(keyword) ||
      task.ui.line_2.value.toLowerCase().includes(keyword)
  });
}

export default getSearchedFitlerTasks;
