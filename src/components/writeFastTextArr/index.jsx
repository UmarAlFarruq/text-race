import { useState } from 'react';
import { Container, Input, WrapperInput, WrapperText, P, Span } from "./style";

const WriteFastText = () => {
    const [inputValue, setInputValue] = useState('');
    const matn = 'Lorem ipsum elit.'

    let textArr = matn.split(' ');
    let arr = textArr.map((value) => {
        return { text: value, type: '', len: 0 }
    });
    const [index, setIndex] = useState(0);
    let length = inputValue.length;

    if (length > 0 && arr.length > index) {
        if (textArr[index][length - 1] === inputValue[length - 1]
            && inputValue === textArr[index].slice(0, length)) {
            arr[index] = {
                ...arr[index], type: 'active', text:
                    <Span.Active> {textArr[index].slice(0, length)}
                        <Span.After  >{textArr[index].slice(length, textArr[index].length)}</Span.After>
                    </Span.Active>
            }
            // count();
        } else {
            for (let i = 0; i < length; i++) {
                if (textArr[index].slice(0, i) === inputValue.slice(0, i)) {
                    arr[index] = { ...arr[index], len: i }
                }
            }
            arr[index] = {
                ...arr[index], type: 'error',
                text:
                    <Span.Active> {textArr[index].slice(0, arr[index].len)}
                        <Span.Error  >{textArr[index].slice(arr[index].len, length)}
                            <Span.After  >{textArr[index].slice(length, textArr[index].length)}</Span.After>
                        </Span.Error>
                    </Span.Active>
            }
        }
        if (`${textArr[index]} ` === inputValue) {
            setInputValue('');
            setIndex(index + 1);
        }
    } else arr[index] = { ...arr[index], type: 'active' }
    // YOZIB O'TILGAN SO'ZLARNI YASHILGA BO'YASH COD lari
    for (let i = 0; i < index; i++) {
        arr[i] = { ...arr[i], type: 'success' };
    }

    // BITTA TO'G'RI SO'Z TUGAGANDAN SO'NG INPUTNI TOZALASH COD LAR

    return (
        <Container>
            <WrapperText>
                {arr.map((value, index) => {
                    return <P
                        key={index}
                        color={value.color}
                        type={value.type}
                    >
                        {value.text}
                    </P>
                })}
            </WrapperText>
            <WrapperInput>
                <Input
                    type={arr[index].type}
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                />
            </WrapperInput>
        </Container>
    )
}
export default WriteFastText;


// Ipsum consequatur sit facilis officiis, odio temporibus quibusdam voluptatum, laborum animi repudiandae dolorem corrupti tempore. Unde ut eum vel ipsa esse similique.