import React from 'react';
import './BlockFour.scss'
import Slider from '../Slider/slider';

function BlockFour() {
    return (
        <>
            <div className="container">
                <div className="block_four_box_block_four">
                    <div className="block_heading_block_four">
                        <div className="heading_part_one_block_four">common <span>results</span> of our work</div>
                        <div className="heading_part_two_block_four">in 3-6 months</div>
                    </div>
                </div>
            </div>
            <div>
            <Slider></Slider>
            </div>
            
        </>
    );
}

export default BlockFour;