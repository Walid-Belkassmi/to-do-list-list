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
      <>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
        <Form />
      </>
    );
  }
}

export default App;
