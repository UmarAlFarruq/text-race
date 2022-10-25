/* eslint-disable no-mixed-operators */
import styled, { keyframes } from "styled-components";

const getType = (type) => {
    switch (type) {
        case 'again': return {
            background: '#3cc1a3',
            marginLeft: 'auto',
            border: '2px solid #3cc1a3',
        }
        default: return {
            backgroundColor: '#ff9000',
            marginRight: 'auto',
            border: '2px solid #ff9000'
        }
    }
}

const AnimatsionPage = keyframes`
    0%{
        opacity: 1;
        transform: scale(0.5);
    }
    100%{
        opacity: 1;
        transform: scale(1);
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${({ mt }) => `${mt}px`};
    width: ${({ width }) => `${width}%` || '100%'};
    background:${({ bg }) => `${bg}`};
    min-height:${({ height }) => `${height}px`};
    margin-bottom:${({ height }) => `${height}px`};
    padding:${({ p }) => `${p}px`};
    border-radius:20px;
    position:relative;
    animation:${AnimatsionPage} 1s linear;
`
export const WrapperButton = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Button = styled.button`
    ${({ type }) => getType(type)}
    min-width: 120px;
    height: 45px; 
    padding:10px;
    font-weight: 800;
    border-radius: 5px;
    transition: .3s;
    color: white;
    :active{
        opacity:0.2;
        scale: 0.9;
    }
    :hover{
        cursor: pointer;
        color: black;
        background: none;
    }
`
export const WrapperInfo = styled.div`
    display: flex;
    /* width: 100%;
    height: 100%; */
`
export const ImgDiv = styled.div`
    width: 30%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid white;
    
`
export const Title = styled.div`
    font-size: 18px;
    font-style: normal;
    font-weight: ${({ w }) => w};
    border-bottom: 1px solid white;
    padding: 10px;
    color: white;
    padding-left: 20px;
    width: 100%;
`
export const Info = styled.div`
    color: white;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const P = styled.span``

P.Title = styled.div`
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    color: whitesmoke;
`
P.Value = styled.div`
     font-size: 20px;
    font-weight: 600;
    font-style: normal;
    /* background-color: green; */
    width :${({ width }) => width && `${width}%` || '35%'} ;
    margin-bottom :${({ mb }) => `${mb}px`} ;
`
export const Span = styled.p`
    font-size: 16px;
    margin: 2px 0;
    font-family: monospace;
    margin-left: 7px;
    padding: 0px;
    font-weight: 500;
    color:black;
    line-height: 23px;
`
export const TimeIsUp = styled.div`
    width: 100%;
    font-size: 22px;
    font-weight: 900;
    font-style: normal;
    text-align: center;
    border: 3px solid #d08383;
    min-height: 150px;
    padding: 20px; 
    border-radius: 8px;
    position: relative;
    `
export const WrapperTime = styled.div`
    opacity: 1;
    position: absolute;
    width: 80%;
    justify-content: center;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    z-index:2;
    background: white;
    top: 10px;
    left: 10%;
    opacity: ${({ hidden }) => hidden && '0'};
`
export const ButtonX = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    border: 2px solid whitesmoke;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#d08383 ;
    color: white;
    top: 8px; 
    right:8px;
`
