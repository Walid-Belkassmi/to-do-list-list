import React from "react";

class List extends React.Component {
  constructor() {
    super();
  }
  afficherBouton = () => {
    console.log(this.props.tasks);
  };
  render() {
    return (
      <div>
        <ul>
          {this.props.all &&
            this.props.tasks.map((task, i) => {
              return (
                <div className="flex justify-center" key={i}>
                  {task.modify === false ? (
                    <li className="px-10 py-2 mb-4 flex-col items-baseline">
                      <p className="p-1 bg-white rounded-md w-96">
                        {task.description}
                      </p>
                      <div className="flex gap-5 ml-10 justify-center">
                        <button
                          className="h-10 font-medium bg-slate-400 text-white px-2 mt-4  hover:bg-white hover:text-slate-400 hover:border-2 hover:border-slate-400 rounded-lg"
                          onClick={() => this.props.buttonModify(i)}
                        >
                          Modify
                        </button>
                        {this.props.displayModify && (
                          <div className="pt-4 flex gap-6">
                            <input
                              className="w-96 px-5 h-8 font-semibold border border-slate-300 text-black rounded"
                              placeholder="Modify"
                              onChange={(event) =>
                                this.props.changeDescription(i, event)
                              }
                              type="text"
                            />
                            <select
                              className="bg-slate-100 px-2 rounded"
                              onChange={(e) => this.props.changeStatus(e, i)}
                            >
                              <option value="">{task.status}</option>
                              <option value="To do">To do</option>
                              <option value="Doing">Doing</option>
                              <option value="Done">Done</option>
                            </select>
                          </div>
                        )}
                        <button
                          className="h-10 font-medium bg-slate-400 text-white px-2 mt-4  hover:bg-white hover:text-slate-400 hover:border-2 hover:border-slate-400 rounded-lg"
                          onClick={() => this.props.deleteTask(i)}
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ) : (
                    <div>
                      <ul>
                        <li className="px-10 py-2  mb-4 flex-col items-baseline">
                          <p className="p-1 bg-white rounded-md w-96">
                            {task.description}
                          </p>
                          <div className="pt-4 flex gap-6">
                            <input
                              className="w-96 px-5 h-8 font-semibold border border-slate-300 text-black rounded"
                              placeholder="Modify"
                              onChange={(event) =>
                                this.props.changeDescription(i, event)
                              }
                              type="text"
                            />
                            <select
                              className="bg-slate-100 px-2 rounded"
                              onChange={(event) =>
                                this.props.changeStatus(event, i)
                              }
                            >
                              <option value="">{task.status}</option>
                              <option value="To do">To do</option>
                              <option value="Doing">Doing</option>
                              <option value="Done">Done</option>
                            </select>
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              onClick={() => this.props.buttonModify(i)}
                            >
                              Valider
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          {!this.props.all &&
            this.props.tasks
              .filter((task) => task.status === this.props.filter)
              .map((task, i) => {
                return (
                  <div className="flex justify-center" key={i}>
                    {task.modify === false ? (
                      <li className="px-10 py-2  mb-4 flex-col items-baseline">
                        <p className="p-1 bg-white rounded-md w-96">
                          {task.description}
                        </p>
                        <div className="flex gap-5 justify-center">
                          <button
                            className="h-7 font-semibold bg-teal-500 text-white px-2 mt-4  hover:bg-white hover:text-teal-500 hover:border-2 hover:border-teal-500"
                            onClick={() => this.props.buttonModify(i)}
                          >
                            Modify
                          </button>
                          {this.props.displayModify && (
                            <div className="pt-4 flex gap-6">
                              <input
                                className="w-96 px-5 h-8 font-semibold border border-slate-300 text-black rounded"
                                placeholder="Modify"
                                onChange={(event) =>
                                  this.props.changeDescription(i, event)
                                }
                                type="text"
                              />
                              <select
                                className="bg-slate-100 px-2 rounded"
                                onChange={(e) => this.props.changeStatus(e, i)}
                              >
                                <option value="">{task.status}</option>
                                <option value="To do">To do</option>
                                <option value="Doing">Doing</option>
                                <option value="Done">Done</option>
                              </select>
                            </div>
                          )}
                          <button
                            className="h-10 font-medium bg-slate-400 text-white px-2 mt-4  hover:bg-white hover:text-slate-400 hover:border-2 hover:border-slate-400 rounded-lg"
                            onClick={() => this.props.deleteTask(i)}
                          >
                            Delete
                          </button>
                        </div>
                      </li>
                    ) : (
                      <div>
                        <ul>
                          <li className="px-10 py-2  mb-4 flex-col items-baseline">
                            <h2 className="text-teal-500 font-bold pb-3 text-center">
                              Tache {this.props.tasks.length - i}
                            </h2>
                            <p className="p-1 italic border w-96">
                              {task.description}
                            </p>
                            <div className="pt-4 flex gap-6">
                              <input
                                className="w-96 px-5 h-8 font-semibold border border-slate-300 text-black rounded"
                                placeholder="Modify"
                                onChange={(event) =>
                                  this.props.changeDescription(i, event)
                                }
                                type="text"
                              />
                              <select
                                className="bg-slate-100 px-2 rounded"
                                onChange={(event) =>
                                  this.props.changeStatus(event, i)
                                }
                              >
                                <option value="">{task.status}</option>
                                <option value="To do">To do</option>
                                <option value="Doing">Doing</option>
                                <option value="Done">Done</option>
                              </select>
                              <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => this.props.buttonModify(i)}
                              >
                                Valider
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                );
                // console.log(this.props.tasks[i])
              })}
        </ul>
      </div>
    );
  }
}

export default List;
