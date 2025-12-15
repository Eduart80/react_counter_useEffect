# React Counter useEffect

React + TypeScript + Vite

This counter app include the functionalities like:
- Increment by 1
- Decrement by 1
- Reset Mechanism 
- Keyboard Listeners for up and down
- Input values, increment/decrement will be based on the number user inputs.
- Counting or Log counting will be shown on the bottom
- The data is saved on localstorage<br>
 Counting can go only on positive direction, no count goes less than 0 (zero)

## Use of hooks.
useState. I use this option to store data for counting number, in combination with value.
Value is the option where user input selected number of choice.
Log is used to store the count and display it on UI,
and lastly Loadding is used to show message when localStorage is saving the data.

UseEffect.
I used this to monitor the [count] dependency, after data changes this hook will run the code again.
It include save to localStorage, [ if( // ) ] statement to show or hide the message "Saving to LocalStorage...".
Inside this, i used a timer to slow the procec for 5 sec, in order for the message to be able to be seen.
Inside this setTimer i change the state of the message and at the end, cleanup  proccess of timer with return clearTimeout().
```js 
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
```
