import React, {useState, useCallback} from 'react';
import './App.css';
import Child from './Child';

function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState('');

  // memoize the function ..function is always same Reference... only redefined if counter changed
  const updateCounterFromChild = useCallback(() => setCounter(counter + 1), [counter]);
  return (
    <div className="App">
      <h1>Hello from Parent: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <Child counter={counter} updateCounter={updateCounterFromChild}/>
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <ClickCounter/>
      <HoverCounter/> */}
      {/* <MyParentComponent/> */}
      {/* <Counter/> */}
    </div>
  );
}

export default App;
