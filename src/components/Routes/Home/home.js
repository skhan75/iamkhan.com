import React from 'react';
import Particles from "react-particles-js";
import Layout from "../../../hoc/layouts/main";
import SocialIcons from "../../Widgets/socialIcons";


const paramConfig = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: false
      }
    },
    color: {
      value: "#ffffff"
    },
    opacity: {
      value: 0.05
    },
    size: {
      value: 5,
      random: true,
      anim: {
        speed: 3,
        size_min: 0.3
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      random: true,
      speed: 1,
      direction: "top",
      out_mode: "out"
    }
  }
};

const Home = () => {
  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">

        <Particles className="mi-home-particle" params={paramConfig} />

        <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-12">
                <div className="mi-home-content">
                  <h1>
                    Hi, I am <span className="color-theme">Sami Ahmad Khan</span>
                  </h1>
                  <p>This is my website</p>

                  <SocialIcons bordered />

                </div>
              </div>
            </div>
          </div>
      </div>
    </Layout>
  )
}

export default Home;
