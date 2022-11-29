import { useState, useEffect } from 'react';


const TimerNew = ({ time, GameOver, textOver }) => {
    const [minuts, setMinuts] = useState(time > 60 ? Math.floor(time / 60) : 0);
    const [seconds, setSeconds] = useState(time > 60 ? time % 60 : time);
    var timer;
    // o'yin davomiylik vaxtini o'lchash 
    let life = time - minuts * 60 - seconds;
    let lifeTime = life > 60
        ? `${Math.floor(life / 60)}:${life % 60}`
        : `00:${life < 10 ? '0' + life : life}`;


    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps, no-unused-vars
        timer = setInterval(() => {
            if (!textOver) {
                setSeconds(seconds - 1);
                GameOver(lifeTime, false);
            }
            if (seconds === 0) {
                 if (minuts > 0) {
                    setMinuts(minuts - 1);
                    setSeconds(59)
                } else stop();
            }

        }, 1000)

        if (minuts === 0 && seconds === 0) {
            stop();
            GameOver(lifeTime, true);
        }

        return () => clearInterval(timer);

    });
    const stop = () => { clearInterval(timer) }

    return (
        <>{
            textOver ? <></> : <h3> {minuts < 10 ? `0${minuts}` : minuts}:{seconds < 10 ? `0${seconds}` : seconds} </h3>
        }</>
    );
}

export default TimerNew;