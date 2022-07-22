import React from 'react'

class List extends React.Component {
    
    
    render () {
        console.log(this.props.taks)
        return (
            <>
                {this.props.tasks} 
                
            </>
        )
           
    }
}

export default List