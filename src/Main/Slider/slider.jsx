import React, { useRef, useState } from "react";
import "./Slider.scss";

const Slider = () => {
    const slides = [
        { text: "Sales cycle time: -10-30%" },
        { text: "Engagement: +10-25%" },
        { text: "Conversion rates: +5-15%" },
        { text: "Internal alignment efficiency: +20-40%" },
        { text: "Customer acquisition: -10-20%" },
        { text: "Marketing ROI: +15-50%" },
        { text: "Customer retention: +20-60%" },
        { text: "Sales growth: +10-40%" },
    ];

    const visibleSlides = 5; // Количество видимых слайдов
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
                            {slide.text.split(":")[0]}: <br />
                            <span>{slide.text.split(":")[1]}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
