import React, { Component } from 'react';
import './Slides.css';
import ResourceRoot from '../Util';

class Slides extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                    <div className="flexslider js-fullheight">
                        <ul className="slides"> 
                            <li style={{ backgroundImage: `url(${ResourceRoot}/images/yn.png)` }}>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner">
                                                <div className="desc">
                                                    {/* <h1>Stay Simple<br/> Stay Young</h1> */}
                                                    <h1>Hello There</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style={{ backgroundImage: `url(${ResourceRoot}/images/wwy2.png)` }}>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner js-fullheight">
                                                <div className="desc">
                                                    <h1>I'm George</h1>
                                                    <p>
                                                        <a className="btn btn-primary btn-learn"
                                                            href= {`${ResourceRoot}/files/George_Yang.pdf` }
                                                            target="_blank" rel="noopener noreferrer">View Resume<i className="icon-download4" /></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>);
    }
}

export default Slides;
