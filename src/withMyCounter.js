import React, { Component } from 'react';

const withMyCounter = (WrappedComponent, incrementNumber) => {
    class WithMyCounter extends React.Component {

        state = {
            count: 0
        }

        incrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + incrementNumber}
            })
        }

        render() {
            return (
                <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}/>
            )
        }
    }
    return WithMyCounter;
}

export default withMyCounter