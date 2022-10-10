import React, { Component } from "react";
import "./blog.css";
class blog extends Component {
  render() {
    return (
      <div className="container1">
        <div className="blog_container margin_top">
          <div className="blog">
            <div className="blog_1">
              <a
                href="https://medium.com/@avinash.yadav3043/javascript-engine-v8-engine-fe48bdfa8445"
                target="_blank"
              >
                <h4>
                  <li>
                    How V8 Engine Came into existence ? and Exploring V8 Engine.
                  </li>
                </h4>
              </a>
            </div>

            <div className="blog_2">
              <a
                href="https://medium.com/@avinash.yadav3043/inside-javascript-engine-30cf89dff0e0"
                target="_blank"
              >
                <h4>
                  <li>Inside JavaScript Engine</li>
                </h4>
              </a>
            </div>

            <div className="blog_3">
              <a
                href="https://medium.com/@avinash.yadav3043/how-to-make-rest-api-s-ec1a10fdba39"
                target="_blank"
              >
                <h4>
                  <li>How To Make REST APIs .</li>
                </h4>
              </a>
            </div>
          </div>
        </div>
        <div className="blogFooter">
          <div className="blogSocial-Links translate_social">
            {/* Linked-in */}

            <a
              className="blogHoverColor"
              href="https://www.linkedin.com/in/avinash-yadav-588744151/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* instagram */}

            <a
              className="blogHoverColor"
              href="https://www.instagram.com/avi_nash_yadav/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fa fa-instagram" />
            </a>

            {/* twiter */}
            <a
              className="blogHoverColor"
              href="https://twitter.com/CoderAvinash"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fa fa-twitter-square" aria-hidden="true" />
            </a>

            {/* Github */}
            <a
              className="blogHoverColor"
              href="https://github.com/ProgrammerAvinash"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fa fa-github-square" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default blog;
