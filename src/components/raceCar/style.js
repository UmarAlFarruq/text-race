/* eslint-disable no-mixed-operators */
import styled, { keyframes } from 'styled-components'

const Cars = keyframes`
    0%{
        transform: scale( .4 );
        opacity: 0;
    }
    100%{
        transform: scale( 1 );
        opacity: 1;
    }
`
const HereAnime = keyframes`
    0%{ opacity: 1; scale:1; }
    20%{ opacity: 0.7; scale:0.9;}
    40%{ opacity: 1;scale:1;}
    60%{ opacity: 0.7;  scale:0.9;}
    80%{ opacity: 1;scale:1;}
    100%{ opacity: 0.3;}
`
export const Container = styled.div`
    width: 980px;
    min-height: 200px;
    height: fit-content;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background: green; */
`

export const WrapperCars = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    animation-name: ${Cars};
    animation-duration: ${({ second }) => `${second}s`};
    animation-iteration-count: linear ;
`
export const WrapperVPM = styled.div`
    min-width: 80px;
    height: 100%;
    margin: auto;
    text-align: end;
    white-space: nowrap;
    border-bottom: 2px solid #ffb21c;
    `
export const WrapperIMG = styled.div`
    width: 880px;
    height: 100%;
    padding-left: 5px;
    display: flex;
    border-bottom: 2px dashed  #ffb21c ;
    align-items: end;
    position: relative;
`
export const Wrapper = styled.div`
        display: flex;
        position: relative;
        margin-left: ${({ ml }) => ml >= 0 || ml ? `${ml}%` : '712px'};
        /* margin-left: 710px; */
`
export const Popover = styled.div`
    display: none;
    flex-direction: column;
    position: absolute;
    min-width: 250px;
    width: fit-content;
    height: fit-content;
    padding: 10px;
    font-size: 22px;
    font-weight:600;
    top: 30%;
    left:${({ left }) => !left ? `-280%` : '105%'};
    z-index: 1;
    border: 1px solid whitesmoke;
    box-shadow: 0 0 3px 0 rgba(1, 173, 233,1);
    border-radius: 4px;
    background:white ;
    /* transition: all 5s; */

`

export const Img = styled.img`
    height:30px;
    width: fit-content;
    margin-bottom: 2px;
    background:red;

    /* transition: all 5s; */
    &:hover ~ ${Popover} {
        display:flex ;
    }
`
export const P = styled.div``

P.Wpm = styled.p`
    color: #444;
    font-size: 16px;
`
P.Place = styled.p`
    color: #333;
    font-size: 12px;
    font-weight: 600;
    font-style: normal;
    line-height: 20px;
`
export const Time = styled.div`
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled(WrapperIMG)`
    color: blue;
    border: none;
`
export const PopoverInfo = styled.div`
    widows: 100%;
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    font-family: 'Courier New', 'Courier', 'monospace';
`
export const Here = styled.div`
    width:fit-content;
    padding: 5px 15px;
    color: white;
    font-size: 22px;
    font-weight: 600;
    position: absolute;
    /* z-index:-1; */
    left:-970px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    position: relative;
    background:#99cc00 ;
    animation: ${HereAnime} 7s linear;

    &::before{
    content: "";
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid #99cc00;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    }
`


