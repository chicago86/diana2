import React from 'react';
import './Accordion.scss'

function Accordion() {
    return (
        <>
            <div className="our_services">
                <div className='accordion_logo'>Our services</div>
                <div className="row_accordion">
                    <div className="coll-40">
                        <div className="block_four_box_block_accordion">
                            <div className="block_heading_block_accordion">
                                <div className="heading_part_one_block_accordion">Business <span><br />Positioning</span></div>
                                <div className="heading_part_two_block_accordion_start">and Repositioning</div>
                            </div>
                        </div>
                    </div>
                    <div className="coll-60"><div className="accordion_box">
                        <div class="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Products & services optimization
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Making sure your offerings are <span>not just good, but great</span> — aligned with market demands and your company’s strengths.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Pricing mode strategy
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Developing a <span>strategy that reflects the value</span> you deliver and maximizes your profits.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Aligning sales and marketing
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Helping assess and <span>improve sales and marketing activities</span>, aligning them on goals, channels, processes, and messaging.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Available formats:
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul>
                                            <li><b>Intro:</b> 45 min, free, for discovering the scope of the challenge and planning next steps. </li>
                                            <li>Problem-solution sessions: 1,5 hr, from 75$, <i>dedicated to a particular challenge within business positioning.</i></li>
                                            <li> <b>Positioning workshops:</b> 3 hr, from 250$, brainstorming and planning for leadership teams. </li>
                                            <li><b>Full dive-in:</b> up to 1mo, from $2500, <i>for the entire positioning revision.</i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row_accordion">
                    <div className="coll-40">
                        <div className="block_four_box_block_accordion">
                            <div className="block_heading_block_accordion">
                                <div className="heading_part_one_block_accordion">Messaging  <span><br />Framework</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="coll-60"><div className="accordion_box">
                        <div class="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Channel-specific strategies
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Partnering with customer-facing teams to create tailored strategies for their respective channels.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Unified planning
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Bringing together your sales, marketing, delivery, and customer success teams and helping them sync their plans under a unified messaging strategy.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Go-to-market
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Guiding teams in developing go-to-market strategies that align new product launches with strategic business goals and market dynamics.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Available formats:
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul>
                                            <li><b>Intro:</b> 45 min, free, for discovering the scope of the challenge and planning next steps. </li>
                                            <li>Problem-solution sessions: 1,5 hr, from 75$, <i>dedicated to a particular challenge within business positioning.</i></li>
                                            <li> <b>Positioning workshops:</b> 3 hr, from 250$, brainstorming and planning for leadership teams. </li>
                                            <li><b>Full dive-in:</b> up to 1mo, from $2500, <i>for the entire positioning revision.</i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row_accordion">
                    <div className="coll-40">
                        <div className="block_four_box_block_accordion">
                            <div className="block_heading_block_accordion">
                                <div className="heading_part_one_block_accordion">Content <span><br />Creation</span> </div>
                            </div>
                        </div>
                    </div>
                    <div className="coll-60"><div className="accordion_box">
                        <div class="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Identity and tone of voice
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Collaborating with marketing, sales, design, and vision owners to craft a consistent tone of voice and visual identity.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Content planning
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Creating a detailed action plan with a content calendar and vision document that outlines key content types (blogs, case studies, whitepapers, social posts) that support your overall business goals.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Sales & marketing collaterals
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul>
                                            <li>Developing content for your sales and marketing teams, including sales decks, case studies, expert articles, templates, guides, and ebooks.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Available formats:
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul>
                                            <li><b>Intro:</b> 45 min, free, for discovering the scope of the challenge and planning next steps. </li>
                                            <li><b>Workshops on content creation:</b> 3 hr, from 250$, <i>training for sales, marketing, and customer success teams.</i></li>
                                            <li> <b>Content projects:</b> from $30/hr, <i>working on long pieces, such as articles for media and lead magnets (e.g. guides, templates, ebooks).</i></li>
                                            <li><b>Regular content creation:</b> from $800/mo, <i>fixed monthly scope, for building and developing social presence.</i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Accordion; 