import React, { useEffect, useState } from 'react';
import './Slider.css';
import { SliderData } from './SliderData'

const Slide = () => {
    const [CurrentSlide, setCurrentSlide] = useState(0);

    const SliderDataLength = SliderData.length;

    const autoscroll = true;
    let SlideInterval;
    let IntervalTime = 2000;

    const NextSlide = () => {
        setCurrentSlide(CurrentSlide === SliderDataLength - 1 ? 0 : CurrentSlide + 1);
    }

    const PrevSlide = () => {
        setCurrentSlide(CurrentSlide === 0 ? SliderDataLength - 1 : CurrentSlide - 1);
    }

    function auto() {
        SlideInterval = setInterval(NextSlide, IntervalTime);
    }

    useEffect(() => {
        if (autoscroll) {
            auto();
        }

        return () => clearInterval(SlideInterval);
    });

    return (
        <div className='Slider'>
            <i onClick={PrevSlide} className='fa-solid fa-angle-left' /><i onClick={NextSlide} className='fa-solid fa-angle-right' />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === CurrentSlide ? 'Slide Current' : 'Slide'} key={index}>
                        {index === CurrentSlide && (
                            <>
                                <img src={slide.image} alt="" />
                                <div className="content">
                                    <h1>{slide.heading}</h1>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}

        </div>
    )
}

export default Slide;