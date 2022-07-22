import React from "react";
import Form from "./components/Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: [],
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
      <div>
        <Form />
      </div>
    );
  }
}

export default App;
