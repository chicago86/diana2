import React from 'react';
import './BlockSeven.scss'
import arrowLeft from './img/arrow_left.svg'
import arrowRight from './img/arrow_right.svg'
import dottedLeft from './img/dotted_left.svg'
import dottedRight from './img/dotted_right.svg'
import planetOne from './img/planet.png'
import dottedLeft2 from './img/dotted_left2.svg'
import planetTwo from './img/planet_2.png'
import SliderBlockSeven from './SliderBlockSeven/SliderBlockSeven'

function BlockSeven() {
    return (
        <>
            <div className="block_seven">
                <div className="container">
                    <div className="block_seven_images_container_arrow">
                        <img className="arrowStyle arrow_left" src={arrowLeft} alt="arrow" />
                        <button className="button_in_seven_section">Book an intro</button>
                        <img className="arrowStyle arrow_right" src={arrowRight} alt="arrow" />
                    </div>
                    <div className="heading_section_block_seven">Our clients come from </div>
                    <div className="section">

                        <div className="block_seven_bottom">
                            <img className='dotted_left' src={dottedLeft} alt="dotted" />
                            <img className='dotted_right' src={dottedRight} alt="dotted" />
                            <img className='planet_one' src={planetOne} alt="planet" />
                            <h2 className="block_title">Geographies, <span>such as the</span></h2>
                            <div className="list">
                                <span>/ US /</span>
                                <span>/ Canada /</span>
                                <span>/ Germany /</span>
                                <span>/ Austria /</span>

                            </div>
                            <div className="list">
                                <span>/ Switzerland /</span>
                                <span>/ Netherland /</span>
                                <span>/ Ukraine /</span>
                            </div>
                        </div>

                        <div className="block_seven_bottom">
                            <h2 className="block_title">Niches, <span>such as</span></h2>
                            <div className="list">
                                <span>/ FinTech /</span>
                                <span>/ EdTech /</span>
                                <span>/ PropTec /</span>
                                <span>/ Ecommerce /</span>

                            </div>
                            <div className="list">
                                <span>/ Workspace Productivity /</span>
                                <span>/ HR & Recruiting /</span>

                            </div>
                            <div className="list">
                                <span>/ Design /</span>
                                <span>/ Software Development /</span>
                            </div>
                        </div>
                    </div>
                    <div className='section_two'>
                        <div className='block_two'>
                            <h3 className='heading_two'> If you are outside of these bubbles, still get in touch. <br /><span>We’re always up to expanding a bit!</span></h3>
                        </div>
                        <img className='dotted_left2' src={dottedLeft2} alt="dotted" />
                        <img className='planet_two' src={planetTwo} alt="planet" />
                    </div>
                    <div className='heading_carusel'>
                        Don’t just take our word for it
                    </div>

                </div>
                <div className='slider_in_seven'>
                    <SliderBlockSeven></SliderBlockSeven>
                </div>

            </div>



        </>
    );
}

export default BlockSeven;