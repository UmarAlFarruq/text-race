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

export const Container = styled.div`
    width: 100%;
    min-height: 200px;
    height: fit-content;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const WrapperCars = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: end;
    animation-name: ${Cars};
    animation-duration: ${({ second }) => `${second}s`};
    animation-iteration-count: linear;
    /* background:red; */
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
    width: 100%;
    height: 100%;
    padding-left: 5px;
    display: flex;
    border-bottom: 2px dashed  #ffb21c ;
    align-items: end;
    position: relative;
    /* background: red; */
`
export const Wrapper = styled.div`
        display: flex;
        position: relative;
        margin-left: ${({ ml }) =>  `${ml}%`};
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



