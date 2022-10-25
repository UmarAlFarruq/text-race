
import { Container } from "./style";
import { useLocation } from "react-router-dom";
import React from 'react';
const Generic = () => {
    const location = useLocation()
    return (
        <Container>
            <h1>Generic {location?.pathname} </h1>
        </Container>
    )
}
export default Generic;