import styled, { keyframes } from 'styled-components';


const getInputStyle = (type) => {
    switch (type) {
        case 'error': return {
            border: '2px solid #d08383',
            background: '#d8a1a1',
            color: 'white',
            fontSize: '18px'
        }
        default: return {
            border: '2px solid rgb(197, 243, 241)',
            boxShadow: ' 0 0 12px 0 rgba(197, 243, 241,0.7)'
        }
    }
}
const AnimationText = keyframes`
    0%{opacity: 1}
    50%{opacity: 0}
    100%{opacity: 1}
`
const ContaindrAnime = keyframes`
     0%{
        /* transform: scale( .4 ); */
        transform:translateY(250px);
        opacity: 0;
    }
    100%{
        transform: scale( 1 );
        opacity: 1;
        transform:translateY(0);
    }
`


export const Container = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    min-height: 120px;
    border: ${({ bg }) => bg && `2px solid rgb(197, 243, 241)`};
    background-color:${({ bg }) => bg ? 'aliceblue' : 'white'};
    /* box-shadow: ${({ bg }) => bg && `0 0 12px 0 rgba(197, 243, 241,0.7)`} ; */
    border-radius: 8px;
    padding: 15px;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
    animation-name: ${({ bg }) => bg && ContaindrAnime};
    animation-duration: 1.5s;
    animation-iteration-count: linear;
`
export const WrapperInput = styled.div`
    display: flex;
    flex-direction: column;
`
export const WrapperText = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
    margin: 0;
    font-family:'Times New Roman', Times, ;
`
export const Input = styled.input`
    ${({ type }) => getInputStyle(type)}
    width: 100%;
    height: 30px;
    border-radius: 5px;
    font-size: 14px;
    padding: 10px;
    &:focus {
        outline: none;
    }
   
`
export const P = styled.p`
    font-size: 16px;
    margin: 2px 0;
    font-family: monospace;
    margin-left: 7px;
    padding: 0px;
    font-weight: 500;
    color:black;
    line-height: 23px;
`
export const Span = styled.span`
    border-right: 1px solid #222;
    animation-name: ${AnimationText};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    width: 1px;
`

export const Active = styled.span`
    border-bottom: 1px solid black;
    /* border-right: 1px solid black; */
`
export const Success = styled.span`
    border-bottom:${({ type }) => type ? `1px solid #99cc00` : null};
    color:#99cc00 ;
    width: fit-content;
`
export const Error = styled.span`
    color: white;
    border-bottom: 1px solid #d08383;
    background-color:#d08383 ;
    border-radius: 3px;
`




