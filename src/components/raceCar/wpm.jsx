import { useState, useRef, useEffect } from 'react'


const Wpm = ({ time, RandomNum }) => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState(0);
    const [num, setNum] = useState(0);
    useEffect(() => {
        setNum(num + timer);
        RandomNum(num)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timer])
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        return {
            total,
        };
    }
    const startTimer = (e) => {
        let { total, } = getTimeRemaining(e);
        if (total >= 0)
            setTimer(Math.floor(10 * Math.random()))
    }
    const clearTimer = (e) => {
        setTimer(0);
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 5000)
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
    }, []);
    return `${num}`;
}

export default Wpm;
