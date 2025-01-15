import React from 'react';
import './BlockEight.scss'
import arrow from "./img/arrow.svg"
import left from './img/left.svg'
import planet from './img/planet.png'
function BlockEight() {
    return (
        <>
            <div className="container">
                <div className="block_eight_box">
                    <div className='arrow'><img className="arrowStyle" src={arrow} alt="arrow" /></div>
                </div>
                <div className="block_box_eight">
                    <h3 className='heading_one'>One more thing</h3>
                    <img className='left_eight' src={left} alt="left" />
                    <img className='planet_eight' src={planet} alt="planet" />
                    <div className="row_eight">
                        <div className="text_item_eight"></div>

                        <div className="text_item_eight">
                            <p>Most of us, when we hear the story of Netflix transitioning from DVDs to streaming, imagine ourselves as the next Netflix. If only the conditions were that favorable.</p>
                            <p>In reality, most companies don’t become Netflix <span>not because opportunities aren’t there — they’re just trying to fit themselves into the wrong ones.</span></p>
                        </div>
                    </div>

                    <div className="block_heading_eight">
                        <div className="heading_part_one_block_eight_first">What story do you</div>
                        <div className="heading_part_two_block_eight"><span>want to create?</span></div>
                    </div>

                    <div className="bold_text">
                        Discover how to make the most out of current opportunities in your industry. Schedule an introductory call — it's free or sign up for a free positioning audit.
                    </div>
                </div>



                <div className="arrow_and_button">
                    <div className="block_eight_box">
                        <div className='arrow'><img className="arrowStyle" src={arrow} alt="arrow" /></div>
                    </div>
                    <div className="block_eight_button">
                        <button>Learn more</button>
                    </div>
                </div>

            </div >
        </>
    );
}

export default BlockEight;