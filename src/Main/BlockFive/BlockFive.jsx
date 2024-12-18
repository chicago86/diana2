import React from 'react';
import './BlockFive.scss'
import Vector1 from './img/Vector1.png'
import Moon3 from './img/moon3.png'
import Vector2 from './img/Vector2.png'
import Moon4 from './img/moon4.png'
import Vector4 from './img/Vector4.png'
import Moon6 from './img/moon6.png'
import Vector3 from './img/Vector3.svg'
import Moon5 from './img/moon5.png'

function BlockFive() {
    return (
        <>
            <div className="block_five">
                <div className="container">
                    <div className="block_five_box_title">
                        <div className="heading">
                            How we approach it
                        </div>
                        <div className="title">
                            Most of the challenges of both service and product businesses come from positioning and its communication. <span>This is what we do with that:</span>
                        </div>
                    </div>
                    <div className='group_five'>
                        <div className="img_box_one">
                            <img src={Vector1} className='vector1' alt="Vector1" />
                            <img src={Moon3} className='moon3' alt="moon3" />
                        </div>
                        <div className='title_box_one'>
                            <div className="heading_box_one"><span>We begin by</span> figuring out <br /> the root cause of your challenges.</div>
                            <div className='span_box_one'>Is it an inconsistent positioning?<br />
                                Is it sales-marketing delivery misalignment?<br />
                                Is it your communications?</div>
                        </div>
                        <div className="img_box_two">
                            <img src={Vector2} className='vector2' alt="Vector2" />
                            <img src={Moon4} className='moon4' alt="moon4" />
                        </div>
                        <div className='title_box_two'>
                            <div className="heading_box_two"><span>Then,</span> we help refine your positioning or work directly on bringing all your </div>
                            <div className='span_box_two'>customer-facing teams on one messaging strategy.</div>
                        </div>
                        <div className="img_box_three">
                            <img src={Vector3} className='vector3' alt="Vector3" />
                            <img src={Moon5} className='moon5' alt="moon5" />
                        </div>
                        <div className='title_box_three'>
                            <div className="heading_box_three"><span className='span_box_three'>Finally,</span>we can support execution, <span className='span_italic_three'>creating content for your sales, marketing, and customer support teams.</span> Either on a regular basis or as needed. </div>
                        </div>
                        <div className="img_box_three">
                            <img src={Vector4} className='vector4' alt="Vector4" />
                            <img src={Moon6} className='moon6' alt="moon6" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default BlockFive;