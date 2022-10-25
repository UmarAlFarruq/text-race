import styled from 'styled-components';

const getType = (type) => {
    switch (type) {
        case 'success': return {
            // border: '1px solid #e6e9ec',
            color: '#99cc00',
        };
        case 'active': return {
            borderBottom: '2px solid black',
        };
        case 'error': return {
            color: '#d08383',
            borderBottom: '2px solid #d08383',
        }
        default: return {
            color: '#999999',
        }
    }
}
const getInputStyle = (type) => {
    switch (type) {
        case 'error': return {
            border: '2px solid #d08383',
            background: '#d8a1a1',
            color: 'white',
            fontSize: '16px',
            lineWeight: '120%'
        }
        default: return {
            border: '2px solid rgb(197, 243, 241)',
            boxShadow: ' 0 0 12px 0 rgba(197, 243, 241,0.7)'
        }
    }
}



export const Container = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    min-height: 250px;
    border: 2px solid rgb(197, 243, 241);
    background-color:aliceblue;
    box-shadow:  0 0 12px 0 rgba(197, 243, 241,0.7);
    border-radius: 8px;
    padding: 15px;
    flex-direction: column;
    justify-content: space-between;
`
export const WrapperInput = styled.div`
    display: flex;
    flex-direction: column;
`
export const WrapperText = styled.div`
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    padding: 0px;
    margin: 0;
    font-family:'Times New Roman', Times, ;
`
export const Input = styled.input`
    ${({ type }) => getInputStyle(type)}
    width: 100%;
    height: 30px;
    border-radius: 3px;
    padding: 10px;
    &:focus {
        outline: none;
    }
   
`
export const P = styled.p`
    ${({ type }) => getType(type)}
    font-size: 16px;
    margin: 2px 0;
    font-family: monospace;
    margin-left: 7px;
    padding: 0px;
    font-weight: 500;
`
export const Span = styled.span``

Span.Active = styled.span`
    color:#99cc00 ;
    border-bottom:2px solid #99cc00 ;
`
Span.After = styled.span`
    color:black;
    border-bottom:2px solid black ;
    border-left: 2px solid black;
`
Span.Error = styled.span`
    color: #d08383;
    border-bottom: 2px solid #d08383;
`

