import React from 'react';

const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends React.Component {

        state = {
            count: 0
        }

        incrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + incrementNumber}
            })
        }
        render(){
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}/>
        }
    }
    return WithCounter
}

export default withCounter