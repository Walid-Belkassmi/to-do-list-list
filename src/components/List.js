import React from 'react'

class List extends React.Component {
    render () {
        return (
            <>
                {this.props.tasks} 
                console.log({this.props.tasks})
            </>
        )
           
    }
}

export default List