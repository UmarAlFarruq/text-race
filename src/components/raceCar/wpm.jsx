import { useState, useEffect } from 'react';


const Wpm = ({ time, RandomNum }) => {
    const [seconds, setSeconds] = useState(0);
    var timer;


    RandomNum(seconds)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps, no-unused-vars
        timer = setInterval(() => {
            let random = Math.floor(Math.random() * 10);
            setSeconds(seconds + random);

        }, time * 1000)

        if (seconds < 0) stop();
        return () => clearInterval(timer);


    }, [seconds]);
    const stop = () => { clearInterval(timer) }
    // console.log('random');
    return (
        <>{seconds}</>
    );
}

export default Wpm;