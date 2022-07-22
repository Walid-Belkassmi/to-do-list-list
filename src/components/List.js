import React from "react";

class List extends React.Component {
  render() {
    console.log(this.props.tasks);
    return (
        <>
            {this.props.tasks}
            <button className="bg-green-300 font-semibold hover:bg-green-500 rounded-3xl hover:text-white px-7 py-3 mt-3" onClick={this.props.delete}>Supprimer</button>
            <button className="bg-yellow-300 font-semibold hover:bg-yellow-500 rounded-3xl hover:text-white px-7 py-3 mx-7 my-4">Modifier</button>
        </>
  )}
  }

export default List;
