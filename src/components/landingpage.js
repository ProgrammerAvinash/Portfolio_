import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { animate__animated, animate__bounce } from "animate.css";
import "./landingpage.css";

class landingpage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "0", scroll: "" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <container className="container">
              <div className="neu">
                <img src="https://i.ibb.co/QMTm78N/pic.jpg" alt="profile-pic" />
              </div>

              <div className="banner-text">
                <img src="" alt="" />
                <h4 className="animate__animated animate__bounceInLeft intro_name">
                  Hi ! I'm Avinash Yadav 👋{" "}
                </h4>
                <h1 className="animate__animated animate__bounceInRight glow_bannerText ">
                  Full Stack Web Developer
                </h1>

                <hr />
                <p>
                  {" "}
                  <a
                    className="translate_social"
                    href="https://www.javascript.com/"
                  >
                    Javascript
                  </a>{" "}
                  |{" "}
                  <a className="translate_social" href="https://reactjs.org/">
                    React
                  </a>{" "}
                  |{" "}
                  <a className="hoverColor" href="https://nodejs.org/en/">
                    Node
                  </a>{" "}
                  |{" "}
                  <a className="hoverColor" href="https://expressjs.com/">
                    Express
                  </a>{" "}
                  |{" "}
                  <a className="hoverColor" href="https://www.mongodb.com/">
                    mongo DB
                  </a>{" "}
                </p>

                <div className="Social-Links translate_social">
                  {/* Linked-in */}

                  <a
                    className="hoverColor"
                    href="https://www.linkedin.com/in/avinash-yadav-588744151/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fa fa-linkedin-square" aria-hidden="true" />
                  </a>

                  {/* instagram */}

                  <a
                    className="hoverColor"
                    href="https://www.instagram.com/avi_nash_yadav/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fa fa-instagram" />
                  </a>

                  {/* twiter */}
                  <a
                    className="hoverColor"
                    href="https://twitter.com/Aviyadav25"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fa fa-twitter-square" aria-hidden="true" />
                  </a>

                  {/* Github */}
                  <a
                    className="hoverColor"
                    href="https://github.com/ProgrammerAvinash"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fa fa-github-square" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </container>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default landingpage;
