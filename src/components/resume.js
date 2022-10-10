import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class resume extends Component {
  render() {
    return (
      <div className="resume">
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://i.ibb.co/QMTm78N/pic.jpg"
                alt="profile pic"
                style={{ height: "200px", borderRadius: "250px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}> Avinash Yadav </h2>
            <h4 style={{ color: "grey" }}> Programmer </h4>
            <hr style={{ borderTop: "5px solid #833fb2", width: "50%" }} />
            <p> I am 24 Years old , Lives in Mumbai,India </p>
            <hr style={{ borderTop: "5px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p> Mumbai,India </p>
            <h5>Mobile</h5>
            <p>+91 - 8421113903</p>
            <h5>Email Id</h5>
            <p>Avinash.yadav3043@gmail.com</p>
            <h5>Website</h5>
            <p>avinashyadav@netlify.com</p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2015}
              endYear={2018}
              collegeName="R.k.Talreja College [Mumbai University]"
              collegeDescription=" B.sc (Information Technology) "
            />
            <Education
              startYear={2018}
              endYear={2019}
              collegeName="S.S.T College [Mumbai University]"
              collegeDescription=" M.sc (Computer Science)-Part I "
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <Experience
              startYear={2019}
              endYear={"current"}
              jobName="Tata Cosultancy Services"
              jobDescription="Working as a Software Developer"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <Skills skill="HTML/CSS" progress={75} />

            <Skills skill="JavaScript" progress={75} />

            <Skills skill="React     " progress={65} />
            <Skills skill="Node      " progress={50} />
          </Cell>
          <div></div>
        </Grid>
      </div>
    );
  }
}
export default resume;
