import React, { Component, PureComponent } from 'react'
import Pure from './Pure'
import Regcomp from './Regcomp'
import MemoComp from './MemoComp'


class Parent extends Component {

    state = {
        name:"faysal"
    }

    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name:'faysal'
            })
        }, 2000)
    }
    render() {
        console.log('parent compoenet render------');
        return (
            <div>
                Parent Compnent
                <MemoComp name={this.state.name}/>
                {/* <Regcomp name={this.state.name}/>
                <Pure name={this.state.name}/> */}
            </div>
        )
    }
}

export default Parent
