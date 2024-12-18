import React from 'react';
import './BlockThree.scss'
import arrow from "./img/arrow.svg"
function BlockThree() {
    return (
        <>
            <div className="container">
                <div className="block_three_box">
                    <div className="block_heading">
                        <div className="heading_part_one">we may <span>help</span></div>
                        <div className="heading_part_two">with that</div>
                    </div>
                </div>
                <div className='arrow'><img className="arrowStyle" src={arrow} alt="arrow" /></div>
                <div className="block_three_box_text">
                Imagine business consultants who speak the languages of business analysis, sales, marketing, and technology. <span>Most importantly, though, we speak the language of your business value, helping align your teams, processes, and messaging.</span>
                </div>
            </div>
        </>
    );
}

export default BlockThree;