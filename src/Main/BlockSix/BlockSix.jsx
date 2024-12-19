import React from 'react';
import './BlockSix.scss';
import arrow from "./img/arrow.svg";

function BlockSix() {
    return (
        <div className="block_six">
            <div className="container">
                <div className="block_six_box_heading">
                    <div className="heading">
                        Want to find out how it works in practice? There’s a <span>free</span> positioning and messaging review
                    </div>
                    <div className="arrow">
                        <img
                            className="arrowStyle"
                            src={arrow}
                            alt="arrow"
                        />
                    </div>
                    <div className="block_six_button">
                        <button>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlockSix;
