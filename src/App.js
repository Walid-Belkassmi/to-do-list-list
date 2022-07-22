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
    let clonedAddTask = [...this.state.tasks, taskToDo.target.value];

    this.setState({
      tasks: clonedAddTask,
    });
  };

  render() {
    return (
      <>
        <Form addTask={this.addTask}/>
      </>
    );
  }
}

export default App;
