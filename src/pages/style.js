import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const Button = styled.button`
    padding: 10px;
    color: white;
    background: #0061df;
    min-width: 150px;
    height: 44px;
    border: #0061df;
    border-radius: 3px;
    font-size: 16px;
    &:active{
        opacity: 0.7;
        transform: scale(0.98);
    }
`
export const Start = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 130px;
    z-index: 1;
    
`


