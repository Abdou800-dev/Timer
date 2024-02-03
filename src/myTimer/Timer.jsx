import React, { useState ,useEffect} from "react";
import './Timer.css'
const Timer = () => {
   const [time, setTime]= useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])
    
    function formatTimer() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds()
        const meridiem = hours >=12? "PM":"AM"        
        hours = hours % 12 || 12
    return `${hours} :${minutes} :${seconds} :${meridiem}`
    }
  
    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTimer()}</span>
            </div>
        </div>
    )
}
export default Timer ;