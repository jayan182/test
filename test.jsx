import {useState} from 'react';

function Counter(){
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>{counter}</h1>
            <button
                onClick={()=>{
                    setCounter(i => (i+1))
                }}
            >
                Increment
            </button>
            <button
                onClick={()=>{
                    setCounter(i => (i-1))
                }}
            >
                Decrement
            </button>
            <button
                onClick={()=>{
                    setCounter(0)
                }}
            >
                Reset
            </button>
        </div>
    )
}

export default Counter;