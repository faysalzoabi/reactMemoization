import React, { Component } from 'react'

class Regcomp extends Component {
    render() {
        console.log('reg componenet render ---------');
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default Regcomp
