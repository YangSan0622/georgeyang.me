import React, { Component } from 'react';
import './Skills.css';


class Skills extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="skills">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I am good at</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Programming Language</h3>
                                        <p>Adequate programming experience in <b>Python, Javascript/Typescript, C/C++, Java, PostgreSQL, MySQL</b>.
                                            
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-2">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>Web Development</h3>
                                        <p>Working experience with web development framework such as <b>React, Angular</b>, 
                                            backend technology such as <b>Django, MongoEngine</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-layers2" />
                                    </span>
                                    <div className="desc">
                                        <h3>Technology</h3>
                                        <p>Familiar with <b>AWS</b> technology stack such as <b>S3 and Glue</b>, 
                                        Elastic stack such as <b>Logstash, and Elasticsearch</b>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-4">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>Dev Ops</h3>
                                        <p>Proficient with automation tool such as <b>Jenkins</b>, 
                                        containerization technology such as <b>Docker</b>, 
                                        and ETL technology such as <b>AWS Glue (backed by Apache Spark)</b>  </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3>Mobile development</h3>
                                        <p>Worked on <b>Android</b> development for individual and group course projects</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-6">
                                    <span className="icon">
                                        <i className="icon-layers2" />
                                    </span>
                                    <div className="desc">
                                        <h3>Agile</h3>
                                        <p>Working experience in Agile software development lifecycle. 
                                            I am always capable of meeting the deadlines and deliver high quality code. </p>
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

export default Skills;
