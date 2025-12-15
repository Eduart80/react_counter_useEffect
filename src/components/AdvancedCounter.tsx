import React, { useEffect, useState } from 'react'

export const AdvancedCounter = ()=> {
    const [count, setCount]=useState<number>(0)
    const [value, setValue]=useState<number>(1)
    
    useEffect(()=>{
        localStorage.setItem('counting', JSON.stringify(count))
    },[count])

        function decrise () {
            if(count > 0 ){
                let res
                setCount(prevCount => {
                    res = prevCount - value
                    return res
                });
                // localStorage.setItem('counting', JSON.stringify(res || 0))
            }
        }
        function incrise () {
            let res
            setCount(prevCount => {
                res = prevCount + value
               return res
            })
            //  localStorage.setItem('counting', JSON.stringify(res))
        }
        function resetAll(){
            setCount(0)
            setValue(1)
        }
        function stepVal(e: React.ChangeEvent<HTMLInputElement>) {
            const userVal = Number(e.target.value);
            setValue(userVal);
        }

        function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
            if (e.key === 'ArrowUp') {
                incrise();
            } else if (e.key === 'ArrowDown') {
                decrise();
            }
        }
      

    return (
        <div tabIndex={0} onKeyDown={handleKeyDown} style={{outline: 'none'}}>
            <h3>Current count: {count}</h3>
            <button className='btn' onClick={decrise}>Decrement</button>
            <button className='btn' onClick={incrise}>Increment</button>
            <button className='btn' onClick={resetAll}>Reset</button>
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
             <h5>Changes </h5>
            <p>localHost</p>
        </div>
    )
}
