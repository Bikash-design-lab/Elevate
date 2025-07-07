import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [running, setIsRunning] = useState(false)
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        let timer;
        if (running) {
            timer = setInterval(() => {
                setSeconds(prev => prev + 1)
            }, 1000)
        }
        return () => clearInterval(timer)
    }, [running])

    const start = () => { setIsRunning(true) }
    const stop = () => { setIsRunning(false) }
    const reset = () => {
        setIsRunning(false)
        setSeconds(0)
    }
    return (
        <div>
            <h3>Time: {seconds}</h3>
            <button disabled={running} onClick={start}>Start</button>
            <button onClick={stop} disabled={!setIsRunning}>Stop</button>
            <button onClick={reset} >reset</button>
        </div>
    )
}
export default Timer

