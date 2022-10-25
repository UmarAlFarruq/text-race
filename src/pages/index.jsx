// import WriteFastTextCopy from "../components/writeFastText/copy";
import WriteFastText from "../components/writeFastText";
import { Button, Container, Start, Wrapper } from "./style";
import { useState } from 'react';
// import TimerNew from "../components/Timer/new";



const Content = () => {
    // const [time, setTime] = useState('')
    // function finishGame(lifeTime, hide) {
    //     setTime(lifeTime)
    // }
    const [race, setRace] = useState(false);
    const [start, setStart] = useState(false);

    const onRace = () => {
        setStart(true);
        setTimeout(() => { setRace(true) }, 2000)
        setTimeout(() => { setStart(false) }, 2000)
    }
    return (
        <Container>
            {/* <TimerNew time={5} finishGame={finishGame} /> */}
            {/* {time} */}
            <Wrapper>
                {!race ? <Button onClick={() => onRace()} >Start race</Button> : null}
            </Wrapper>
            {race ? <WriteFastText /> : null}
            {start ? <Start><h1>{ }</h1></Start> : null}
        </Container>
    )
}
export default Content;