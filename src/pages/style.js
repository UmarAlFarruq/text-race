import styled, { keyframes } from "styled-components";


const Animate = keyframes`
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    25% {
        transform: translate(-50%, -50%) rotate(180deg);
    }

    50% {
        transform: translate(-50%, -50%) rotate(180deg);
    }

    75% {
        transform: translate(-50%, -50%) rotate(360deg);
    }

    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
`
const AnimateBg = keyframes`
       0% {
        height: 0;
    }

    25% {
        height: 0;
    }

    50% {
        height: 100%;
    }

    75% {
        height: 100%;
    }

    100% {
        height: 0;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height:500px;
    justify-content: center;
    align-items: center;
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-star;
`
export const Button = styled.button`
    padding: 10px;
    color: white;
    background: #0061df;
    min-width: 150px;
    width: fit-content;
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
    position: relative;
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 130px;
    z-index: 1;
`
export const Loading = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    border: ${({ type }) => `3px solid ${type}`};
    border-radius:5px;
    box-shadow: ${({ type }) => `0px 0px 12px 0 ${type}`};
    animation: ${Animate} 2s linear infinite;
    &:before{
    content: '';
    position: absolute;
    border-radius:2px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${({ type }) => `${type}`};
    animation: ${AnimateBg} 2s linear infinite;
    }
`
export const SitaforWrapper = styled.div`
    min-width: 200px;
    min-height: 80px;
    height: fit-content;
    width: fit-content;
    display: flex;
    align-items: center;
    border: 3px solid #444;
    gap: 15px;
    padding: 0px 15px;
`

export const Circle = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid #444;
    border-radius: 50%;
    background: ${({ bg }) => bg|| '#555'};
`
export const Text = styled.h2`
    font-size:${({ size }) => `${size}px` || '20px'};
    font-style: normal;
    color:${({ color }) => color || 'blue'};
`

