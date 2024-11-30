import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../redux/actions/counterAction';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(counterActions.increment())} style={buttonStyle}>
            Increment
        </button>
        <button onClick={() => dispatch(counterActions.decrement())} style={buttonStyle}>
            Decrement
        </button>
        <button onClick={() => dispatch(counterActions.reset())} style={buttonStyle}>
            Reset
        </button>
    </div>
  );
};

const buttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
};

export default Counter;