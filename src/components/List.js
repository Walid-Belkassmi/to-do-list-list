import React from "react";

class List extends React.Component {
  render() {
    // console.log(this.props.tasks);
    return (
      <div>
        {this.props.tasks.map((task, i) => {
          return (
            <div key={i}>
              <p>{task.description}</p>

              {task.modify === false ? ()
              <input
                className="shadow appearance-none border rounded w-1/4 py-2 px-3 mb-5 text-gray-700 leading-tight hover:border-transparent focus:outline-none focus:shadow-outline"
                placeholder="Modifier"
                onChange={(event) => this.props.changeDescription(i, event)}
                type="text"
                />
              <select>
                <option value="To do">To do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>
              <button
                className="bg-green-300 font-semibold hover:bg-green-500 rounded-3xl hover:text-white px-7 py-3 mt-3"
                onClick={() => {
                  this.props.deleteTask(i);
                }}
                >
                Supprimer
              </button>
              {/* modify button */}
              <button className="bg-yellow-300 font-semibold hover:bg-yellow-500 rounded-3xl hover:text-white px-7 py-3 mx-7 my-4">
                Modifier
              </button>
              
        }
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
