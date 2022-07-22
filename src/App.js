import React from "react";
import Form from "./components/Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: [],
    };
  }

  addTask = (taskToDo) => {
    console.log(taskToDo);
    let clonedTask = [...this.state.task, taskToDo];

    this.setState({
      tasks: clonedTask,
    });
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
