import React from 'react'

function ChildComponenet(props) {
    return (
        <div>
            {/* <button onClick={props.greetHanlder}>Greet Parent</button> */}
            <button onClick={() => props.greetHanlder('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponenet
