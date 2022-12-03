//React
import { useEffect, useState } from "react";

// Styles
import "./timer.scss";

const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [timer, setTimer] = useState(false);

    useEffect(()=> {
        if (seconds > 59) {
            setSeconds(0);
            setMinutes(minutes => minutes + 1);
        } else if (minutes > 59) {
            setMinutes(0);
            setHours(hours => hours + 1);
        }
    },[seconds, minutes])

    useEffect(()=> {
        let interval;
        if (timer) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
        
    }, [timer])

    const onReset = () => {
        setTimer(false);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    return (
        <div className="timer">
			<h1 className="timer__title">Timer</h1>
            <div className="counter">
                <div className="counter__item">
                    <div className="counter__value">
                        {hours < 10 ? `0${hours}` : hours}
                    </div>
                    <span className="counter__text">Hours</span>
                </div>
                <div className="counter__item">
                    <div className="counter__value">
                        {minutes < 10 ? `0${minutes}` : minutes}
                    </div>
                    <span className="counter__text">Minutes</span>
                </div>
                <div className="counter__item">
                    <div className="counter__value">
                        {seconds < 10 ? `0${seconds}` : seconds}
                    </div>
                    <span className="counter__text">Seconds</span>
                </div>
            </div>
            <div className="timer__btns">
                <button onClick={()=> setTimer(true)} className="btn timer__btn timer__btn--green">Start</button>
                <button onClick={()=> setTimer(false)} className="btn timer__btn">Pause</button>
                <button onClick={onReset} className="btn timer__btn timer__btn--red">Reset</button>
            </div>
		</div>
    )
}

export default Timer;