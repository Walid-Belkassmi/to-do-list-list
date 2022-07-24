import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }
  handleTaskDescriptionChange = (e) => {
    this.setState({ task: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({ task: "" });
  };
  render() {
    return (
      <div className="big-container">
        <form
          className="flex py-12 justify-center gap-4 items-center"
          onSubmit={this.handleSubmit}
        >
          <input
            className="w-96 px-5 h-8 font-semibold border border-slate-300 text-black rounded"
            type="text"
            onChange={this.handleTaskDescriptionChange}
            placeholder="Your task"
            required
          ></input>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-500 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
