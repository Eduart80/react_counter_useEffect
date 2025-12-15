import React, { useState } from 'react'

export const AdvancedCounter = ()=> {
    // counts
    const [count, setCount]=useState<number>(0)
    //value
    const [value, setValue]=useState<number>(1)

   
        function decrise () {
            if(count > 0 ){
                setCount(prevCount => {
                    return prevCount - value
                });
            }
        }
        function incrise () {
            setCount(prevCount => {
               return prevCount + value
            });
        }
        function stepVal(e: React.ChangeEvent<HTMLInputElement>) {
            const userVal = Number(e.target.value);
            setValue(userVal);
        }

    return (
        <div>
                <h3>Current count: {count}</h3>
                <button className='btn' onClick={decrise}>Decrement</button>
                <button className='btn' onClick={incrise}>Increment</button>
                <button className='btn' onClick={()=> setCount(0)}>Reset</button>
                <div>
                    <label htmlFor="step">Step value: </label>
                    <input
                            id="step"
                            type="number"
                            value={value}
                            onChange={stepVal}
                            min={1}
                            style={{width:'50px'}}
                    />
                </div>
        </div>
    )
}
