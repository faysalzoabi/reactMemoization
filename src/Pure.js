import React, { PureComponent } from 'react'

class Pure extends PureComponent {
    render() {
        console.log('pure componenet render ---------');
        return (
            <div>
                Pure componenet {this.props.name}
            </div>
        )
    }
}

export default Pure
