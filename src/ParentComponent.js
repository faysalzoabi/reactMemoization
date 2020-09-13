import React, { Component } from 'react'
import ChildComponenet from './ChildComponenet'

class ParentComponent extends Component {

    state = {
        parentName:'Parent'
    }

    greetParent = (childName) => {
        alert('Hello ' + this.state.parentName + ' from ' + childName)
    }

    render() {
        return (
            <div>
                <ChildComponenet greetHanlder={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
