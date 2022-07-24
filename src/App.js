// import React from "react";
// import Form from "./components/Form";
// import List from "./components/List";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       tasks: [],
//       modifyTask: false,
//     };
//   }

//   addTask = (taskToDo) => {
//     let clonedTask = [...this.state.tasks];
//     clonedTask = [
//       {
//         description: taskToDo,
//         status: "To do",
//         modify: false,
//       },
//       ...this.state.tasks,
//     ];

//     this.setState({
//       tasks: clonedTask,
//     });
//     console.log(this.state.tasks);
//   };

//   deleteTask = (i) => {
//     let clonedTasks = [...this.state.tasks];
//     const index = clonedTasks.indexOf(i);
//     clonedTasks.splice(index, 1);

//     this.setState({
//       tasks: clonedTasks,
//     });
//   };

//   handleModifyTask = (i) => {
//     const clonedTasks = [...this.state.tasks];
//     if (this.state.tasks[i].modify) {
//       clonedTasks[i].modify = false;
//     } else {
//       clonedTasks[i].modify = true;
//     }
//     this.setState({ tasks: clonedTasks, modifyTask: true });
//   };

//   handleChangeDescription = (i, e) => {
//     const clonedTask = [...this.state.tasks];
//     clonedTask[i].description = e.target.value;
//     this.setState({
//       tasks: clonedTask,
//     });
//   };

//   render() {
//     return (
//       <>
//         <Form addTask={this.addTask} />

//         {/* {this.state.tasks.map((task) => {
//           return <List tasks={task} />;
//         })} */}

//         <List
//           tasks={this.state.tasks}
//           deleteTask={this.deleteTask}
//           changeDescription={this.handleChangeDescription}
//         />
//       </>
//     );
//   }
// }

// export default App;

import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      filter: "",
      all: true,
      modifyTask: false,
    };
  }

  addTask = (taskName) => {
    const task = { description: taskName, status: "To do", modify: false };
    const clonedTasks = [...this.state.tasks, task];
    this.setState({ tasks: clonedTasks });
  };

  deleteTask = (index) => {
    const clonedTasks = [...this.state.tasks];
    clonedTasks.splice(index, 1);
    this.setState({ tasks: clonedTasks });
  };

  handleChangeStatus = (e, index) => {
    const clonedTasks = [...this.state.tasks];
    clonedTasks[index].status = e.target.value;
    this.setState({ tasks: clonedTasks });
    console.log(this.state.tasks);
  };

  test = (e) => {
    console.log(e.target.value);
  };

  handleModifyTask = (index) => {
    const clonedTasks = [...this.state.tasks];
    if (this.state.tasks[index].modify) {
      clonedTasks[index].modify = false;
    } else {
      clonedTasks[index].modify = true;
    }
    this.setState({ tasks: clonedTasks, modifyTask: true });
  };

  handleChangeDescription = (index, e) => {
    const clonedTasks = [...this.state.tasks];
    clonedTasks[index].description = e.target.value;
    this.setState({ tasks: clonedTasks });
  };

  handleButtonStatus = (status) => {
    this.setState({ filter: status, all: false });
  };

  handleButtonAll = () => {
    this.setState({ all: true });
  };

  render() {
    return (
      <div>
        <h1 className="p-5 text-center text-blue-900 text-5xl">
          My To Do List
        </h1>

        <Form addTask={this.addTask} />
        <div className="flex gap-4 justify-center">
          <button
            className="px-7 h-10 uppercase font-semibold border-2 rounded-md bg-gray-500 text-white hover:bg-white hover:text-gray-500 hover:border-gray-500"
            onClick={this.handleButtonAll}
          >
            All
          </button>
          <button
            className="px-7 h-10 uppercase font-semibold border-2 rounded-md bg-red-500 text-white hover:bg-white hover:text-red-500 hover:border-red-500"
            onClick={() => this.handleButtonStatus("To do")}
          >
            To do
          </button>
          <button
            className="px-7 h-10 uppercase font-semibold border-2 rounded-md bg-yellow-500 text-white hover:bg-white hover:text-yellow-500 hover:border-yellow-500"
            onClick={() => this.handleButtonStatus("Doing")}
          >
            Doing
          </button>
          <button
            className="px-7 h-10 uppercase font-semibold border-2 rounded-md bg-green-500 text-white hover:bg-white hover:text-green-500 hover:border-green-500"
            onClick={() => this.handleButtonStatus("Done")}
          >
            Done
          </button>
        </div>
        <List
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          changeStatus={this.handleChangeStatus}
          modifyBox={this.handleModifyTask}
          changeDescription={this.handleChangeDescription}
          filter={this.state.filter}
          test={this.test}
          all={this.state.all}
          modifyTask={this.state.modify}
        />
      </div>
    );
  }
}

export default App;
