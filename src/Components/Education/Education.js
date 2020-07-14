import React, { Component } from 'react';
import './Education.css';

class Education extends Component {

    render() {
        return (
            <div>
                <section className="colorlib-education" data-section="education">
                    <div className="colorlib-narrow-content" >
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Education</span>
                                <h2 className="colorlib-heading animate-box">Education</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <div className="fancy-collapse-panel">
                                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingOne">
                                                <h4 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Candidate of Bachelor of Computer Science, University of Waterloo
                        </a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                                <div className="panel-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p><b>September 2015 - Present</b></p>
                                                            <p>On Dean’s Honours List for two terms in 2015-2016, and one term in 2018 by excellent academic standing.</p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <img className="logo" src={`/images/uw_cs_logo.png`} alt={`UW CS LOGO`}></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingFive">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">High School Education
                        </a>
                                                </h4>
                                            </div>
                                            <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                                <div className="panel-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>
                                                                <b>2011-2015</b>
                                                            </p>
                                                            <p>
                                                                Bayview Secondary School, Richmond Hill, Ontatrio, Canada
                                                    </p>
                                                        </div>
                                                        <div className="col-md-6">
                                                        <img className="logo" src={`/images/bss.png`} alt={`BSS LOGO`}></img>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Education;
