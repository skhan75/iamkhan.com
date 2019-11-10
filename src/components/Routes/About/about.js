import React, { Component } from 'react';
import Layout from "../../../hoc/layouts/layout";
import SectionTitle from "../../Widgets/sectionTitle";
import FsLightbox from "fslightbox-react";
import * as Icon from "react-feather";
import imgShort from '../../../static/me_about.jpg';
import imgLarge from '../../../static/me_icon.jpg';
import aboutData from '../../../data/about';

class About extends Component {
  state = {
    toggler: false,
    information: "",
    services: [],
    reviews: []
  };

  setToggler(event) {
    this.setState({
      toggler: event
    });
  };

  render() {
    return (
      <Layout>
        <div className="mi-about-area mi-section mi-padding-top">
          <div className="container">
            <SectionTitle title="About Me" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mi-about-image">
                  <img
                    src={imgShort}
                    alt="about"
                    onClick={() => this.setToggler(!this.state.toggler)}
                  />
                  <span className="mi-about-image-icon">
                      <Icon.ZoomIn />
                  </span>
                  <FsLightbox
                    toggler={this.state.toggler}
                    sources={[imgLarge]}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="mi-about-content">
                  <h3>
                    I am <span className="color-theme">{aboutData.name}</span>
                  </h3>
                  <p>
                    {aboutData.aboutMe}
                  </p>

                  <ul>
                    { !aboutData.name ? null : <li> <b>Full Name</b> {aboutData.name} </li> }
                    { !aboutData.phone ? null : <li> <b>Phone</b> {aboutData.phone} </li> }
                    { !aboutData.email ? null : <li> <b>Email</b> {aboutData.email} </li> }
                    { !aboutData.nationality ? null : <li> <b>Nationality</b> {aboutData.nationality} </li> }
                    { !aboutData.languages ? null : <li> <b>Languages</b> {aboutData.languages} </li> }
                    { !aboutData.hobbies ? null : <li> <b>Hobbies</b> {aboutData.hobbies} </li> }
                  </ul>

                  <a href={aboutData.resume} className="mi-button">Download CV</a>

                </div>
              </div>

            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About;
