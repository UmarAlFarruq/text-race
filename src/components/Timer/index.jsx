import { useState, useRef, useEffect } from 'react'
import { Time } from '../raceCar/style'

const Timer = ({ time, hideTime, }) => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState('mm:ss');
    const [hide, setHide] = useState(true);
    const [timeLeft, setTimeLeft] = useState('');
    // console.log(Date.parse(new Date()));
    useEffect(() => {
        hideTime(hide, timeLeft);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hide, time])

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        if (total === 0) setHide(false)
        let leftTime = (time - total / 1000);
        setTimeLeft(`${leftTime >= 60 ? Math.floor(leftTime / 60) + ':' + (leftTime % 60 > 9 ? leftTime % 60 : '0' + leftTime % 60) : leftTime}s`)
        // console.log(time - total / 1000);
        return {
            total, minutes, seconds
        };
    }
    const startTimer = (e) => {
        let { total, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0)
            setTimer((minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds))
    }
    const clearTimer = (e) => {
        setTimer('');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + time);
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (<Time> {time ? timer : ''}</Time>)
}

export default Timer;