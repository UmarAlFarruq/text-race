/* eslint-disable no-const-assign */
import { Container, WrapperCars, Img, WrapperVPM, WrapperIMG, P, Popover, Wrapper, PopoverInfo, } from "./style";
import car1 from '../../assets/imgs/car1.jpg'
import car2 from '../../assets/imgs/car2.jpg'
import car3 from '../../assets/imgs/car3.jpg'
import car4 from '../../assets/imgs/car4.jpg'
import car6 from '../../assets/imgs/car6.png'
import Wpm from "./wpm";

const RaceCar = ({ ml, time }) => {
    let num = Math.floor(100 * Math.random());
    function RandomNum(num) {
        return num
    }
    const cars = [
        { id: 1, wpm: <Wpm RandomNum={RandomNum} time={time} />, name: 'Guest', car: car2 },
        { id: 2, wpm: <Wpm RandomNum={RandomNum} time={time} />, name: 'Guest', car: car4 },
        { id: 3, wpm: <Wpm RandomNum={RandomNum} time={time} />, name: 'Guest', car: car3 },
        { id: 4, wpm: <Wpm RandomNum={RandomNum} time={time} />, name: 'Guest', car: car1 }
    ]
    return (
        <Container >
            <WrapperCars second={0.3}  >
                <WrapperIMG>
                    <P.Wpm >You:</P.Wpm>
                    <Wrapper ml={ml < 90 ? ml * 0.8 : 83}>
                        <Img src={car6}></Img>
                        <Popover left={ml > 60 || ml === 0 ? true : false}>
                            <P.Wpm>You: </P.Wpm>
                            <PopoverInfo   >
                                <P.Place>Speed{`${Math.floor(ml * 1.3)}  CPM`.padStart(26, '.')}</P.Place>
                                <P.Place>Last race{`${num + num + 10} CPM`.padStart(21, '.')}</P.Place>
                                <P.Place>Best race{`${num * 3 + 10} CPM`.padStart(21, '.')}</P.Place>
                                <P.Place>Points{`${num}`.padStart(20, '.')}</P.Place>
                                <P.Place>Races completed{`${Math.floor(num / 3)}`.padStart(11, '.')}</P.Place>
                                <P.Place>Country  {'Uzbekistan '.padStart(19, '.')}</P.Place>
                            </PopoverInfo>
                        </Popover>
                    </Wrapper>
                </WrapperIMG>
                <WrapperVPM>
                    <P.Place> 1st Place</P.Place>
                    <P.Wpm> 0 wpm</P.Wpm>
                </WrapperVPM>
            </WrapperCars>
            {
                cars.map(({ wpm, car, id, }) => {
                    return (
                        <WrapperCars key={id} second={id * 0.4 + 0.3} >
                            <WrapperIMG>
                                <P.Wpm >Mexmon:</P.Wpm>
                                <Wrapper ml={1} >
                                    <Img ml={wpm} src={car} ></Img>
                                    <Popover left={ml > 60 || ml === 0 ? true : false}>
                                        <P.Wpm>You: </P.Wpm>
                                        <Img src={car6}></Img>
                                    </Popover>
                                </Wrapper>
                            </WrapperIMG>
                            <WrapperVPM>
                                <P.Place> place</P.Place>
                                <P.Wpm>{wpm} wpm</P.Wpm>
                            </WrapperVPM>
                        </WrapperCars>
                    )
                })
            }

        </Container >
    );
}

export default RaceCar;