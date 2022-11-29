import { memo, useEffect, useState } from 'react';
import { Container, WrapperCars, Img, WrapperVPM, WrapperIMG, P, Popover, Wrapper, PopoverInfo, Here, } from "./style";
import car1 from '../../assets/imgs/car1.jpg'
import car2 from '../../assets/imgs/car2.jpg'
import car3 from '../../assets/imgs/car3.jpg'
import car4 from '../../assets/imgs/car4.jpg'
import car6 from '../../assets/imgs/car6.png'

const RaceCar = ({ ml, Stop }) => {
    let random = Math.floor(Math.random() * 10);
    var wpm;
    const [count, setCount] = useState(0)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        wpm = setInterval(() => {
            setCount(count + Math.floor(Math.random() * 10));
        }, 3000)

        return () => clearInterval(wpm);
    });

    const stop = () => { return clearInterval(wpm) };
    stop();

    const cars = [
        { id: 1, wpm: count + Math.floor(Math.random() * 10), name: 'Guest', car: car2 },
        { id: 2, wpm: count + Math.floor(Math.random() * 10), name: 'Guest', car: car4 },
        { id: 3, wpm: count + Math.floor(Math.random() * 10), name: 'Guest', car: car3 },
        { id: 4, wpm: count + Math.floor(Math.random() * 10), name: 'Guest', car: car1 },
    ]
    console.log('racecar render', count);
    return (
        <Container>
            <button onClick={stop}>stop</button>
            <WrapperCars second={0.3}  >
                <WrapperIMG>
                    <P.Wpm >Mehmon:<br />(you)</P.Wpm>
                    <Wrapper ml={ml < 90 ? ml * 0.8 : null}>
                        <Img src={car6}></Img>
                        <Popover left={ml > 60 || ml === 0 ? true : false}>
                            <P.Wpm>You: </P.Wpm>
                            <PopoverInfo   >
                                <P.Place>Speed{`${Math.floor(ml * 1.3)}  CPM`.padStart(26, '.')}</P.Place>
                                <P.Place>Last race{`${random + random + 10} CPM`.padStart(21, '.')}</P.Place>
                                <P.Place>Best race{`${random * 3 + 10} CPM`.padStart(21, '.')}</P.Place>
                                <P.Place>Points{`${random}`.padStart(20, '.')}</P.Place>
                                <P.Place>Races completed{`${Math.floor(random / 3)}`.padStart(11, '.')}</P.Place>
                                <P.Place>Country  {'Uzbekistan '.padStart(19, '.')}</P.Place>
                            </PopoverInfo>
                        </Popover>
                    </Wrapper>
                    <Here>You</Here>
                </WrapperIMG>
                <WrapperVPM>
                    <P.Place> 1st Place</P.Place>
                    <P.Wpm> 0 wpm</P.Wpm>
                </WrapperVPM>
            </WrapperCars>
            {
                cars.map(({ wpm, car, id, }) => {
                    // console.log(random);
                    return (
                        <WrapperCars key={id} second={id * 0.4 + 0.3} >
                            <WrapperIMG>
                                <P.Wpm >Mexmon:</P.Wpm>
                                <Wrapper ml={wpm < 90 ? wpm * 0.8 : null} >
                                    <Img src={car} ></Img>
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

export default memo(RaceCar);