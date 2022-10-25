import { useState } from 'react';
import { Container, Input, WrapperInput, WrapperText, P, Active, Success, Error, Span } from "./style";
import { Title, WrapperCars } from '../raceCar/style'
import RiceCar from './../raceCar/index';
import Time from '../Timer';


const WriteFastTextCopy = ({ str }) => {
    const [inputValue, setInputValue] = useState('');
    const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, incidunt. Hic quas mollitia delectus tenetur ut sapiente, excepturi inventore explicabo? ';
    const [count, setCount] = useState({
        active: 0,
        error: 0,
        before: 0,
        type: '',
        errorLength: 0,
    });
    const [hidden, setHidden] = useState(true)
    const { active, error, before, errorLength } = count
    let length = inputValue.length;
    let after = text.indexOf(' ', before);
    // timer vaxtini olish uchun function
    const hideTime = (e) => {
        setHidden(e)
    }
    console.log(text.slice(before, before + length) === inputValue );
    // if input value va textni mos kelishini tekshirish uchun
    if (text.slice(before, before + length) === inputValue && length > active) {
        
        setCount({ ...count, active: length, error: 0, type: 'active' });
        if (text.slice(before, after + 1) === inputValue) {
            setInputValue('')
            setCount({ ...count, before: before + length, active: 0, error: 0 });
        }
    } else if (length - 1 >= active + error && length <= after +1- before)
        setCount({ ...count, error: error + 1, type: 'error', errorLength: errorLength + 1 });
    else if (length < active)
        setCount({ ...count, active: length, })
    else if (length < active + error)
        setCount({ ...count, error: length - active, type: 'active' })
    return (
        <>
            <Container>
                <WrapperCars>
                    <Title>
                        <h3>The race has ended.</h3>
                    </Title>
                    <Time time={text.length} hideTime={hideTime} />
                </WrapperCars>
                <RiceCar ml={before + 1 + length !== text.length ? Math.floor((before + active) * 100 / text.length) + 1 : 0} />
            </Container>
            {
                after > 0 && hidden ?
                    <Container bg={true} >
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
                            </P>
                        </WrapperText>
                        <WrapperInput>
                            <Input
                                onChange={(e) => setInputValue(e.target.value)}
                                value={inputValue}
                                type={count.type}
                            />
                        </WrapperInput>
                    </Container >
                    : null
            }

        </>
    )
}
export default WriteFastTextCopy;

