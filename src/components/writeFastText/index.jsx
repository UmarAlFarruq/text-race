import { useState, useMemo } from 'react';
import { Container, Input, WrapperInput, WrapperText, P, Active, Success, Error, Span, Here, WrapperInputAndText, DivTime, } from "./style";
import { Title, } from '../raceCar/style'
import RaceCar from './../raceCar/index';
import YourResult from '../yourResult';
import TimerNew from '../Timer/new';


const WriteFastText = ({ str }) => {
    const [inputValue, setInputValue] = useState('');
    const text = 'Lorem ipsum dolor';
    const [count, setCount] = useState({
        active: 0,
        error: 0,
        before: 0,
        type: '',
        accuracy: 0,
    });
    const { active, error, before, accuracy: errorLength } = count;
    // RaceCar uchun prop

    const ml = useMemo(() => {
        return Math.floor((before + active) * 100 / text.length)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count.before])
    // Destructuring 
    let after = text.indexOf(' ', before); //  avtive text oxirgi index
    if (after <= 0) after = before + text.slice(before).length; // active oxirgi so'zga borganda after
    // LIFE TIME verabile
    const [lifeTime, setLifeTime] = useState('');
    // GAME OVER verabile // 
    const [gameOver, setGameOver] = useState(false);
    let textOver = false;
    if (before + active === text.length) {
        textOver = true
        //  setGameOver(true)
    }// text over 
    let length = inputValue.length; // input length 




    if (text.slice(before, before + length) === inputValue && length > active) {
        setCount({ ...count, active: length, error: 0, type: 'active' });
        if (text.slice(before, after + 1) === inputValue) {
            setInputValue('')
            setCount({ ...count, before: before + length, active: 0, error: 0 });
        }
    } else if (length - 1 >= active + error && length <= after - before + 1)
        setCount({ ...count, error: error + 1, type: 'error', accuracy: errorLength + 1 });
    else if (length < active)
        setCount({ ...count, active: length, })
    else if (length < active + error)
        setCount({ ...count, error: length - active, type: 'active' });

    const wpm = Math.floor(25 * (before + active) / Number(lifeTime));

    function GameOver(lifeTime, hide) {
        setLifeTime(lifeTime);
        setGameOver(hide);
    }
    // console.log(
    //     'game:', gameOver,
    //     'text:', textOver
    // );
    // console.log('render: writetext');
    return (
        <>
            <Container className='nocopy' >
                <DivTime>
                    <Title>
                        <h3>The race has ended.  {before + active === text.length} </h3>
                    </Title>
                    <TimerNew textOver={textOver} time={100} GameOver={GameOver} gameOver={gameOver} />
                </DivTime>
                <RaceCar Stop={gameOver && textOver} ml={ml} />
                {/* <RaceCar  time={text.length} ml={before + 1 + length !== text.length ? Math.floor((before + active) * 100 / text.length) + 1 : 0} /> */}
            </Container>
            {
                !gameOver && !textOver ?
                    <Container bg={true} className='nocopy' left={15}  >
                        <WrapperInputAndText>
                            <WrapperText>
                                <P>
                                    <Success>{text.slice(0, before)}</Success>
                                    <Active>
                                        <Success type={'active'} >{text.slice(before, before + active)}
                                            {!error ? <Span></Span> : null}
                                            <Error>
                                                {error ? text.slice(before + active, before + active + error) : null}
                                            </Error>
                                            {error ? <Span></Span> : null}
                                        </Success>
                                        {text.slice(before + length, after)}
                                    </Active>
                                    {text.slice(after)}
                                    <Here left={-19} top={-50} >Type this</Here>
                                </P>
                            </WrapperText>
                            <WrapperInput>
                                <Input
                                    onChange={(e) => setInputValue(e.target.value)}
                                    value={inputValue}
                                    type={count.type}
                                />
                                <Here left={-103} >Here</Here>
                            </WrapperInput>
                        </WrapperInputAndText>
                    </Container >
                    : <YourResult wpm={wpm} hidden={gameOver ? true : false} time={lifeTime} error={errorLength && Math.ceil(100 - errorLength * 100 / text.length)} />
            }
        </>
    )
}
export default WriteFastText;

