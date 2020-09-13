import React from 'react'

function MemoComp({name}) {
    console.log('rendering memo compnenet');
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)