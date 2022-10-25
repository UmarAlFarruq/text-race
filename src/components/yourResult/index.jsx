import { useState } from 'react';
import { Button, Container, ImgDiv, Info, Span, P, Title, TimeIsUp, ButtonX, WrapperTime, WrapperButton, WrapperInfo } from "./style";


const YourResult = ({ hidden, error, time, wpm }) => {
    const [hideModal, setHideModal] = useState(false);
    return (
        <Container mt={40} className="nocopy" >
            {
                hidden ?
                    <WrapperTime hidden={hideModal} >
                        <TimeIsUp> Sorry you'ar out of time!
                            <Span>
                                We've reduced your text difficulty to
                                "Beginner," so that you will get more time for the next race.
                            </Span>
                            <ButtonX onClick={() => setHideModal(true)}  >X</ButtonX>
                        </TimeIsUp>
                    </WrapperTime>
                    : null
            }
            <WrapperButton>
                <Button type={'leave'} > Main menu(leave race)</Button>
                <Button type={'again'} > Race again</Button>
            </WrapperButton>

            <Container mt={40} bg='#0068AF' height={250}  >
                <Title w={700} >You just typed a quote from the song:</Title>
                <WrapperInfo>
                    <ImgDiv>
                    </ImgDiv>
                    <Container width={100} >
                        <Title>
                            <P.Value mb={5} width={100} >We Will Become Silhouettes</P.Value>
                            <P.Title>by The Postal Service(submitted by izzy180)</P.Title>
                        </Title>
                        <Container p={10} width={40}  >
                            <Info><P.Title>Your speed:</P.Title><P.Value>{wpm ? wpm : 0} wpm</P.Value></Info>
                            <Info><P.Title>Time:</P.Title><P.Value>{time}</P.Value></Info>
                            <Info><P.Title>Accuracy:</P.Title><P.Value> {error}%</P.Value></Info>
                            <Info><P.Title>Points:</P.Title><P.Value>10</P.Value></Info>
                        </Container>
                        <Info>* this score will not be saved since you didn't finish typing the text in time.</Info>
                    </Container>
                </WrapperInfo>
            </Container>
        </Container>
    )
}
export default YourResult;