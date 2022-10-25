
import { Container, Wrapper } from "./style";
import './style.css'
import Content from './../pages/index';
const Root = () => {
    return (
        <Wrapper>
            <Container>
                <h1 className="animate-charcter" > Text control</h1>
            <Content />
            </Container>
        </Wrapper>
    )
}
export default Root;
