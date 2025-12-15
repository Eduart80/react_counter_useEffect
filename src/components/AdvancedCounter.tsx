import React, { useEffect,useRef, useState } from 'react'

export const AdvancedCounter = ()=> {
    const [count, setCount]=useState<number>(0)
    const [value, setValue]=useState<number>(1)
    const [log, setLog] = useState<number[]>([])
    const [loadding, setLoadding ] = useState<boolean>(false)
    

    useEffect(() => {
        localStorage.setItem('counting', JSON.stringify(count))
        if (count !== 0) {
            setLoadding(true)
            setLog(prevLog => [...prevLog, count])

            const timer = setTimeout(() => {
                setLoadding(false);
            }, 100)

            return () => clearTimeout(timer)
        } else {
            setLoadding(false)
        }
    }, [count]);

    

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
            })
        }
        function resetAll(){
            setCount(0)
            setValue(1)
            setLog([]);
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
            {loadding ? (
                <p>Saving to LocalStorage...</p>
            ) : (
                <p>Changes saved:</p>
            )}
            <p style={{textAlign:'left', marginBottom:'3px'}}>Count history:</p>
            <hr style={{marginTop:'0'}}/>
            <ul >
                {log.map((item, idx) => (
                    <li key={idx} style={{listStyle:'none', textAlign:'left',
                         maxHeight:'300px'}}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
