import React, { Component } from 'react'

class EventBind extends Component {



    state = {
        message:"Hello"
    }

    // clickHandle() {
    //     this.setState({
    //         message:"Good Bye"
    //     })
    // }

    clickHandle = () => {
        this.setState({
            message:"Good Bye"
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandle.bind(this)}>Click me</button> */}
                <button onClick={this.clickHandle}>Click me</button>
            </div>
        )
    }
}

export default EventBind
