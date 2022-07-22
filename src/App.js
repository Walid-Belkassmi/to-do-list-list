import React from "react";
import Form from "./components/Form";

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

  render() {
    return (
      <>
        <Form addTask={this.addTask} />
      </>
    );
  }
}

export default App;
