import {useState} from 'react';

function Counter(){
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>{counter}</h1>
            <button
                onClick={()=>{setCounter(i => (i+1))}}
            >
                Increment
            </button>
        </div>
    )
}

export default Counter;