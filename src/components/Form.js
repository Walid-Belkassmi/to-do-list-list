import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }

  handleTaskDescriptionChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({
      task: "",
    });
    e.target.value = "";
  };

  render() {
    return (
      <>
        <div className="my-4">
          <form
            onSubmit={this.handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="flex-initial">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight hover:border-transparent focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Nouvelle tâche"
                onChange={this.handleTaskDescriptionChange}
              />
              <button
                className="bg-orange-300 font-semibold hover:bg-orange-500 rounded-3xl hover:text-white px-7 py-3 mt-3"
                type="submit"
              >
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Form;
