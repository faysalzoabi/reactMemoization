import React, { Component } from 'react'
import withCounter from './withCounter';
import withMyCounter from './withMyCounter';

class HoverCounter extends Component {

    render() {
        const {count, incrementCount} = this.props;
        return (
            <div>
               <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default withMyCounter(HoverCounter, 10)
