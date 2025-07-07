// db.users.updateMany({},{$incr:{age,1}})


// import React, { useState } from 'react'
// // controlled component
// const Test = () => {
//     const[name, setName] = useState("")
//     console.log(name)
//   return (
//     <div>
//         <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
//     </div>
//   )
// }
// export default Test 


// // useContext in context api
// // event loop in node.js
// // module.rubber function 
// // proces.env

import React, { useEffect, useRef, useState } from 'react'

const Test = () => {
    const[second, setSecond] = useState(0)
    const[minute, setMinute] = useState(0)
    const[hrs, setHrs] = useState(0)
    const[isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let timerId
        if (isRunning) {
        timerId = setInterval(() => {
            setSecond((prevSec) => {
            if (prevSec + 1 === 60) {
                setMinute((prevMin) => {
                if (prevMin + 1 === 60) {
                    setHrs((prevHrs) => prevHrs + 1);
                    return 0;
                }
                return prevMin + 1;
                });
                return 0;
            }
            return prevSec + 1;
            });
        }, 1000);
        }

    return () => clearInterval(timerId);

  }, [isRunning]);

    const handleStart =()=>{
        setIsRunning(true)
       
    }
    const handleStop =()=>{
        setIsRunning(false)
    }
    const handleReset =()=>{
        setIsRunning(false)
        setHrs(0)
        setMinute(0)
        setSecond(0)
    }

  return (
    <div>
      <h1>Timer  </h1>
      <p>{hrs}hrs:{minute}min:{second}sec</p>
        <button  onClick={handleStart} >Start</button>
        <button onClick={handleStop} >Stop</button>
        <button onClick={handleReset} >Reset</button>
    </div>
  )
}



export default Test
//  prepare on react 
// // diffing , reconcilation  