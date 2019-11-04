import React, { Component } from 'react';
import Layout from "../../../hoc/layouts/layout";
import SectionTitle from "../../Widgets/sectionTitle";
import FsLightbox from "fslightbox-react";
import * as Icon from "react-feather";
import logo from '../../../static/me_icon.jpg';

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
                    src={logo}
                    alt="about"
                    onClick={() => this.setToggler(!this.state.toggler)}
                  />
                  <span className="mi-about-image-icon">
                      <Icon.ZoomIn />
                  </span>
                  <FsLightbox
                    toggler={this.state.toggler}
                    sources={[logo]}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="mi-about-content">
                  <h3>
                    I am <span className="color-theme">Sami Ahmad Khan</span>
                  </h3>
                  <p>
                    I am a frontend web developer. I can provide clean code and
                    pixel perfect design. I also make website more & more
                    interactive with web animations.
                  </p>
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
