import React from "react";
import Form from "./components/Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  addTask = (string) => {
    const clonedAddTask = [...this.state.task, string.target.value];

    this.setState({
      task: clonedAddTask,
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
