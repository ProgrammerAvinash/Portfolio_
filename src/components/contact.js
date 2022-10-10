import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import "./contact.css";

class contact extends Component {
  render() {
    return (
      <div
        className="contact-body margin_top"
        style={{ margin: "auto", width: "100%" }}
      >
        <Grid className="contact-grid margin_top">
          <Cell col={6}>
            <h2> Avinash Yadav </h2>
            <img
              src="https://i.ibb.co/QMTm78N/pic.jpg"
              alt="profile pic"
              style={{ height: "250px", paddingTop: "50px" }}
            />

            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              <b>
                I am 25 years old from Mumbai,India Currently Working in TCS as
                a Software Developer <br />
                Email Me : avinash.yadav3043@gmail.com
              </b>{" "}
            </p>
          </Cell>

          <Cell col={6}>
            <h2> Contact Me </h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    className="translate_social"
                    style={{ fontSize: "22px", fontFamily: "Aunton" }}
                  >
                    <i className="fa fa-phone-square translate_social" />
                    (+91) 8421113903
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    className="translate_social"
                    style={{ fontSize: "22px", fontFamily: "Aunton" }}
                  >
                    <i
                      className="fa fa-instagram noHover "
                      aria-hidden="true"
                    />

                    <a
                      href="https://www.instagram.com/avi_nash_yadav/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      @avi_nash_yadav
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    className="translate_social"
                    style={{ fontSize: "22px", fontFamily: "Aunton" }}
                  >
                    <i
                      className="fa fa-twitter-square noHover"
                      aria-hidden="true"
                    />
                    <a
                      href="https://twitter.com/CoderAvinash"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      @CoderAvinash
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    className="translate_social"
                    style={{ fontSize: "22px", fontFamily: "Aunton" }}
                  >
                    <i
                      className="fa fa-linkedin-square noHover"
                      aria-hidden="true"
                    />

                    <a href="https://www.linkedin.com/in/avinash-yadav-588744151/">
                      {" "}
                      Linked In{" "}
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default contact;
