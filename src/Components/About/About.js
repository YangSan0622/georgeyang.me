import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Something More About Me</h2>
                                            <p>I am an undergraduate student studying Computer Science in University of Waterloo. Since I am in the COOP program, I have approximately 2 years of internship/CO-OP experience in Back-End, Front-End, and Video Game development</p>
                                            <p>I have worked in San Francisco, Santa Clara, Toronto, and Montreal. I started doing sports climbing when I was in San Francisco, I mostly do bouldering. 
                                                I also learned how to do Sprots Fishing when I was there.
                                            </p>
                                            <p>I am highly caffeine addicted, during final season I can do two triple shot espresso a day</p>
                                            <p>I played Saber Fencing </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>);
    }
}

export default About;
