import React from "react";
import Form from "./components/Form";
import List from "./components/List";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  addTask = (taskToDo) => {
    console.log(taskToDo);
    let clonedTask = [...this.state.tasks];
    clonedTask = [
      {
        description: taskToDo,
        status: "To do",
      },
      ...this.state.tasks,
    ];

    this.setState({
      tasks: clonedTask,
    });

    console.log(this.state.tasks);
  };

  deleteTask = (i) => {
    let clonedTasks = [...this.state.tasks];
    const index = clonedTasks.indexOf(i);
    clonedTasks.splice(index, 1);

    console.log('delete')

    this.setState({
      tasks: clonedTasks,
    });
  };

  render() {
    return (
      <>
        <Form addTask={this.addTask} />
        <List tasks={this.state.tasks} delete={this.deleteTask}/>
        
      </>
    );
  }
}

export default App;
