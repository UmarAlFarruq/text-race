import WriteFastText from "../components/writeFastText";
import { Button, Circle, Container,  SitaforWrapper, Start, Text, Wrapper } from "./style";
import { useState, useEffect } from 'react';
import './style.css'


const Content = () => {
    const [race, setRace] = useState(false);
    const [start, setStart] = useState(false);
    const [time, setTime] = useState(1);
    let timer;

    function Color(time) {
        if (time > 0 && 2 >= time) return 'green';
        if (time > 2 && 4 >= time) return 'yellow';
        if (time > 4 && 6 >= time) return 'red';
        else return '#262626'
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps, no-unused-vars
        timer = setInterval(() => {
            if (time > 0) {
                setTime(time - 1);
            } else stop();
        }, 1000)
        return () => clearInterval(timer);
    })
    const stop = () => { clearInterval(timer) }

    const onRace = () => {
        setTime(10);
        setStart(true);
        setTimeout(() => { setRace(true) }, 10000)
        setTimeout(() => { setStart(false) }, 10000)
    }
    return (
        <Container>
           
            <Wrapper>
                {!race ? <Button onClick={() => onRace()} >Start race</Button> : null}
            </Wrapper>
            {race ? <WriteFastText /> : null}
            {/* <WriteFastText /> */}
            {start ?
                <Start>
                    <SitaforWrapper>
                        <Circle bg={Color(time) === 'red' && 'red'} ></Circle>
                        <Circle bg={Color(time) === 'yellow' && 'yellow'}  ></Circle>
                        <Circle bg={Color(time) === 'green' && 'green'}  ></Circle>
                        <Text > Get ready to race! </Text>
                        <Text size={32} color={time > 6 ? 'black' : 'red'} >{time}</Text>
                    </SitaforWrapper>
                    {/* <Loading
                        // eslint-disable-next-line no-mixed-operators
                        type={Color(time)}
                    >
                    </Loading> */}
                </Start>
                : null}
        </Container>
    )
}
export default Content;