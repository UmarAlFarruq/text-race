import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height:55px;
    border-bottom: 0.3px solid rgb(123, 123, 255);
`;
export const LogoWrapper = styled.div`
    display: flex;
    color: var(--greenColor);
    align-items: center;
    font-size: 28px;
    font-weight: 800;
`;

export const Logo = styled('img')`
    width: 40px;
    height: 40px;
    margin-right: 6px;
`;
export const LilkGroup = styled.div`
    display: flex;
    align-items: center;
`;
export const ItemGroup = styled.div`
    display: flex;
`;
export const Link = styled(NavLink)`
    text-decoration: none;
    font-size: 22px;
    font-family: Cera Pro;
    font-style: normal;
    font-weight: bold;
    line-height: 20px;
    color: ${({ active }) => (active ? '#46A358' : '#3d3d3d')};
    margin: 0 25px;
`;