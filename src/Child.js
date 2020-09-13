import React, {memo, useMemo, useState} from 'react'

function Child(props) {
    const {counter, updateCounter} = props
    const [print, setPrint] = useState('hi')

    //useMemo to isolate that part of the logic that takes long time in computation
    //and it depends on changes that happen to a particular state or props
    const isEven = useMemo(() => {
        let i = 0;
        while(i < 2000000000) i++;
        return counter % 2 === 0;
    }, [counter])


    const printMe = () => {
        setPrint('printing')
    }


    console.log("child is rendering");
    return (
        <div className="child">
            <h1>Child - {counter}</h1>
            <h2>{isEven ? 'even' : 'odd'}</h2>
            <button onClick={updateCounter}>click me</button>
            <h2>{print}</h2>
            <button onClick={printMe}>click to print</button>
        </div>
    )
}

export default memo(Child)
