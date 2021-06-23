import React from 'react';

import Slider from "react-slick";
import Fade from "react-reveal/Fade";

import GetCard from "../components/GetCard";
import Img6 from "../Asset/Img/quizz.png";
import Img5 from "../Asset/Img/mamproj.png";
import Img4 from "../Asset/Img/maxproj.png";
import Img3 from "../Asset/Img/Limg.png";
import Img2 from "../Asset/Img/irc.png";


const Get = (props) => {
    const { id = null } = props;

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="relative mx-auto mx-4 pt-12 z-50" id={id}>
            <Fade>
                <h1 className="text-gray-50 text-4xl text-center pb-8 pt-8">
                    Projects
                </h1>
            </Fade>
            <Fade>
                <div className="mt-4">

                    <Slider
                        {...settings}
                    >


                        <GetCard img={Img2}
                                 link="https://github.com/EpitechIT2020/W-JSC-502-MAR-2-2-irc-maxence.joly"
                        />

                        <GetCard img={Img3}
                                 link="https://github.com/Havenstd06/Limg"
                        />

                        <GetCard img={Img4}
                                 link="https://github.com/maxouloulou83/portfolio_mj"
                        />

                        <GetCard img={Img5}
                                 link="https://github.com/maxouloulou83/maman_project"
                        />

                        <GetCard img={Img6}/>

                    </Slider>
                </div>
            </Fade>

        </div>
    );
}

export default Get;