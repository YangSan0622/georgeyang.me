import React, { Component } from 'react';
import './Sidebar.css';
import ResourceRoot from '../Util';


class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{ backgroundImage: `url(${ResourceRoot}/images/picture.jpg)` }} />
                            <h1 id="colorlib-logo"><a href="index.html">George Yang</a></h1>
                            <span className="email"><i className="icon-mail"></i> georgeyanghq97@googlemail.com</span>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                                    <li><a href="#skills" data-nav-section="skills">Highlights</a></li>
                                    <li><a href="#timeline" data-nav-section="timeline">Experience</a></li>
                                    <li><a href="#about" data-nav-section="about">About</a></li>
                                    
                                </ul>
                            </div>
                        </nav>
                        <nav id="colorlib-main-menu">
                            <ul>
                                <li><a href="https://www.linkedin.com/in/george-yang-5a86b5155/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                                <li><a href="https://github.com/YangSan0622" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                            </ul>
                        </nav>
                        <div className="colorlib-footer">
                            <p><small>
                                Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration
                            </small></p>

                        </div>
                    </aside>
                </div>
            </div>

        );
    }
}

export default Sidebar;
