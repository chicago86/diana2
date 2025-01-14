import React, { useRef, useState } from "react";
import "./SliderBlockSeven.scss";
import avatar1 from './img/avatar1.png'
import autor1 from './img/autor.png';

const Slider = () => {
    const slides = [
        {
            autor: autor1,
            text: "It was such a great experience for us to work with studio's team. The main task we had was to update all the text on our site. However, we received so much more as a result. The team made sure to understand all the peculiarities of what we do: how our business operates and what our approach looks like. We appreciated that the team not only helped us with the site but also came up with great ideas on how to improve it, suggesting additions and changes",
            avatar: avatar1,
            name: "Liubov Viktorenko",
            role: "co-founder of AllCares",

        },
        {
            autor: autor1,
            text: "It was such a great experience for us to work with studio's team. The main task we had was to update all the text on our site. However, we received so much more as a result. The team made sure to understand all the peculiarities of what we do: how our business operates and what our approach looks like. We appreciated that the team not only helped us with the site but also came up with great ideas on how to improve it, suggesting additions and changes",
            avatar: avatar1,
            name: "Liubov Viktorenko",
            role: "co-founder of AllCares",
        },
        {
            autor: autor1,
            text: "It was such a great experience for us to work with studio's team. The main task we had was to update all the text on our site. However, we received so much more as a result. The team made sure to understand all the peculiarities of what we do: how our business operates and what our approach looks like. We appreciated that the team not only helped us with the site but also came up with great ideas on how to improve it, suggesting additions and changes",
            avatar: avatar1,
            name: "Liubov Viktorenko",
            role: "co-founder of AllCares",
        },
    ];

    const visibleSlides = 3; // Количество видимых слайдов
    const totalSlides = slides.length;
    const sliderRef = useRef(null);

    // Увеличиваем массив для бесшовной прокрутки
    const infiniteSlides = [...slides, ...slides, ...slides];
    const [currentIndex, setCurrentIndex] = useState(totalSlides); // Начинаем с середины

    const handleTransitionEnd = () => {
        if (currentIndex >= totalSlides * 2) {
            setCurrentIndex(totalSlides);
            sliderRef.current.style.transition = "none";
            sliderRef.current.style.transform = `translateX(-${totalSlides * (100 / visibleSlides)}%)`;
        } else if (currentIndex < totalSlides) {
            setCurrentIndex(totalSlides + totalSlides - visibleSlides);
            sliderRef.current.style.transition = "none";
            sliderRef.current.style.transform = `translateX(-${(totalSlides + totalSlides - visibleSlides) * (100 / visibleSlides)}%)`;
        }
    };

    const scrollLeft = () => {
        setCurrentIndex((prev) => prev - 1);
        sliderRef.current.style.transition = "transform 0.3s ease-in-out";
        sliderRef.current.style.transform = `translateX(-${(currentIndex - 1) * (100 / visibleSlides)}%)`;
    };

    const scrollRight = () => {
        setCurrentIndex((prev) => prev + 1);
        sliderRef.current.style.transition = "transform 0.3s ease-in-out";
        sliderRef.current.style.transform = `translateX(-${(currentIndex + 1) * (100 / visibleSlides)}%)`;
    };

    return (
        <div className="slider-container">
            <div className="controls">
                <button className="left-arrow" onClick={scrollLeft}></button>
                <button className="right-arrow" onClick={scrollRight}></button>
            </div>
            <div className="slider-wrapper">
                <div
                    className="slider"
                    ref={sliderRef}
                    style={{
                        display: "flex",
                        transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
                        transition: "transform 0.3s ease-in-out",
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {infiniteSlides.map((slide, index) => (
                        <div
                            key={index}
                            className="slide"
                            style={{
                                flex: `0 0 ${100 / visibleSlides}%`,
                            }}
                        >
                            <div className="slide-content">
                                <div className="autor_pos">
                                    <img src={slide.autor} alt={`${slide.autor}'s avatar`} className="autor1" /></div>

                                <p className="text_sliderP">{slide.text}</p>
                                <div className="author-info">
                                    <img src={slide.avatar} alt={`${slide.name}'s avatar`} className="avatar" />
                                    <div>
                                        <strong>{slide.name}</strong>
                                        <p>{slide.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
