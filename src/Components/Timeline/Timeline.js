import React, { Component } from 'react';
import './Timeline.css';

class Timeline extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="timeline">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Experience</span>
                                <h2 className="colorlib-heading animate-box">Work Experience</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-1">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Software Engineer(Intern) at eHealth, Santa Clara <span>FEBURARY 2020 – MARCH 2020</span></h2>
                                                <ul>
                                                    <li>Individually developed a drug name search microservice using Spring Boot,
                                                    <b> Logstash, Elasticsearch</b> with <b>auto completion</b> and <b>fuzzy search</b></li>
                                                    <li>Integrated and standardized commercial scale ETL jobs using <b>AWS Glue</b></li>
                                                </ul>
                                                <p>
                                                    The anticipated start and end date for this internship was Janurary 2020 to April 2020. 
                                                    However, because of the visa process I started late and due to COVID-19 outbreak I have to end it early.<br></br>
                                                    Even I only had approximately one month, I still managed to get my hands on the entire bussiness flow 
                                                    for eHealth drug service. For example, ETL tasks that extracts, transforms, and loads raw data into database using AWS Glue,
                                                    working with architects to design the data model for drug service, and building the drug name search microservice using
                                                    Elasticsearch and Logstash.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-2">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Software Developer(Intern) at Rippling, San Francisco <span>MAY 2019 – AUGUST 2019</span></h2>
                                                <ul>
                                                    <li>Developed the Hardware Management Service Installer and
                                                    UI using <b>Electron</b> Framework for MacOS and Windows users</li>
                                                    <li>Customized a <b>RADIUS</b> server using <b>FreeRADIUS</b> to deliver WIFI authentication
                                                    service for more than 10 clients on a monthly basis</li>
                                                    <li>Developed and maintained MacOS software update management service using <b>Munki, Reposado </b>
                                                    to hide undesired OS software updates and force selected updates on client’s device</li>
                                                    <li>The above projects and features have generated over <b>USD$100,000</b> of revenue monthly for the firm</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Gameplay Programmer(Intern) at Behaviour Interactive, Montreal <span>SEPTEMBER 2018 – DECEMBER 2018</span></h2>
                                                <ul>
                                                    <li>Developed <b>gameplay, graphic</b>, and sound features for <b>Dead By Daylight </b>
                                                using <b>C++</b> and <b>Unreal 4</b></li>
                                                    <li>Consolidated proficiency in Unreal engine by investigating engine functionalities and
                                                    <b> modifying engine code</b> to implement features for
                                                    <b> WWise sound engine, mesh</b>, and <b>ray casting</b></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Software Developer(Intern) at Royal Bank of Canada, Toronto <span>MAY 2018 – AUGEST 2018</span></h2>
                                                <ul>
                                                    <li>Implemented a UI for RBC’s own <b>S3</b> service using <b>Angular</b>
                                                    for frontend and Python <b>Flask</b> for backend</li>
                                                    <li>Built development pipelines using <b>Docker</b> to
                                                    serve <b>Apache Nifi-cluster</b> and <b>Nifi registry</b></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-5">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Software Developer(Intern) at Opentext, Richmond Hill <span>SEPTEMBER 2017 – DECEMBER 2017</span></h2>
                                                <ul>
                                                    <li>Worked at Opentext Exstream production team for their <b>Automated Testing
                                                    Framework migration</b> using Python and its GUI automation
                                                    module <b>pywinauto</b></li>
                                                    <li>The migration process includes implementing functions for new Automated
                                                    Testing Framework and converting existing testing scripts</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-none">
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Timeline;
