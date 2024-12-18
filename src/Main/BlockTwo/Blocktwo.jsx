import React from 'react';
import './Blocktwo.scss'
import lineDotted from './img/groupMoonAndLine/Vector1.svg'
import moon from './img/groupMoonAndLine/moon.png'
import Ellipse_first from './img/ellipse/Ellipse_first.svg'
import Arrow_first from './img/ellipse/Arrow_first.svg'
import Ellipse_second from './img/ellipse/Ellipse_second.svg'
import Arrow_second from './img/ellipse/Arrow_second.svg'
import Ellipse_three from './img/ellipse/Ellipse_three.svg'
import Arrow_three from './img/ellipse/Arrow_three.svg'
import Ellipse_four from './img/ellipse/Ellipse_four.svg'
import Arrow_four from './img/ellipse/Arrow_four.svg'
import Ellipse_five from './img/ellipse/Ellipse_five.svg'
import Arrow_five from './img/ellipse/Arrow_five.svg'
import Moon2 from './img/groupMoonAndLine/moon2.png'
function Blocktwo() {
    return (
        <>
            <div className="container">
                <div className="group_moon">
                    <img src={lineDotted} alt="lineDotted" />
                    <img src={moon} alt="moon" />
                    <img src={lineDotted} alt="lineDotted" />
                </div>
                <div className="blockTwo">
                    <div className='ellips_group'>
                        <div className='ellipse_box_one'>
                            <div className='one'>Endless <span>strategy meetings</span> without results</div>
                            <div className='ellipse_one'>
                                <img className='arrow_first' src={Arrow_first} alt="Arrow_first" />
                                <img className='ellipse_first' src={Ellipse_first} alt="Ellipse_first" />
                            </div>
                        </div>
                        <div className='ellipse_box_two'>
                            <div className='two'>Low <span>ROI</span> from marketing and sales efforts</div>
                            <img className='arrow_second' src={Arrow_second} alt="Arrow_second" />
                            <img className='ellipse_second' src={Ellipse_second} alt="Ellipse_second" />
                        </div>

                        <div className='ellipse_box_three'>
                            <div className='three'>Poor <span>lead quality</span></div>
                            <img className='arrow_three' src={Arrow_three} alt="Arrow_three" />
                            <img className='ellipse_three' src={Ellipse_three} alt="Ellipse_three" />
                        </div>

                        <div className='ellipse_box_four'>
                            <div className='four'>Difficulty <span>converting leads</span></div>
                            <img className='arrow_four' src={Arrow_four} alt="Arrow_four" />
                            <img className='ellipse_four' src={Ellipse_four} alt="Ellipse_four" />
                        </div>
                        <div className='ellipse_box_five'>
                            <div className='five'>Challenges <span>increasing customer lifetime value</span></div>
                            <img className='arrow_five' src={Arrow_five} alt="Arrow_five" />
                            <img className='ellipse_five' src={Ellipse_five} alt="Ellipse_five" />
                        </div>
                        <div className='heading-center'><h3>Your business keeps looking for new solutions but still gets…</h3></div>
                    </div>

                </div>
                <div className="group_moon">
                    <img src={lineDotted} alt="lineDotted" />
                    <img src={Moon2} alt="moon" />
                    <img src={lineDotted} alt="lineDotted" />
                </div>     
            </div>
        </>
    );
}

export default Blocktwo;