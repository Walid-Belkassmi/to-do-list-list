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
    // console.log(taskToDo);
    let clonedTask = [...this.state.tasks];
    clonedTask = [
      {
        description: taskToDo,
        status: "To do",
        modify: false,
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

    this.setState({
      tasks: clonedTasks,
    });
  };

  handleChangeDescription = (i, e) => {
    const clonedTask = [...this.state.tasks];
    clonedTask[i].description = e.target.value;
    this.setState({
      tasks: clonedTask,
    });
  };

  render() {
    return (
      <>
        <Form addTask={this.addTask} />

        {/* {this.state.tasks.map((task) => {
          return <List tasks={task} />;
        })} */}

        <List
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          changeDescription={this.handleChangeDescription}
        />
      </>
    );
  }
}

export default App;
