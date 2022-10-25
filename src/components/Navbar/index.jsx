import React, { useState } from 'react';
import { Container, ItemGroup, LilkGroup, Logo, LogoWrapper, Link } from "./style";
import { navbar } from '../../utils/navbar';
import logo from '../../assets/imgs/logo.png';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState('/home')
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }} >
            <Container>
                <LogoWrapper>
                    <Logo src={logo} alt="logo" />
                    GreenShop
                </LogoWrapper>
                <LilkGroup>
                    {
                        navbar.map((value) => {
                            return (
                                <Link
                                    key={value.id}
                                    onClick={() => setActive(value.path)}
                                    active={active === value.path}
                                    to={value.path}
                                >
                                    {value.title}
                                </Link>
                            )
                        })
                    }
                </LilkGroup>
                <ItemGroup>
                    item
                </ItemGroup>
            </Container>
            <Outlet />
        </div>
    )
}
export default Navbar;