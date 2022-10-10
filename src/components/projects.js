import React, { Component } from "react";
import "./project.css";
import {
  Tabs,
  Tab,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  Grid,
} from "react-mdl";

class projects extends Component {
  render() {
    return (
      <div className="container">
        <div className="projects-grid">
          <div className="projects-grid">
            <Card shadow="5" style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "white",
                  height: "300px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKooBGL-o_ViAcc7PZtm0I-xtaghnvY8GpA&usqp=CAU) center / cover",
                }}
              >
                TIC TAC TOE Game #1
              </CardTitle>

              <CardText style={{ height: "60px" }}>
                {" "}
                A Cool Tic Tac Toe game made in reactjs{" "}
              </CardText>
              <CardActions border>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://github.com/ProgrammerAvinash/TicTacToe"
                  target="_blank"
                >
                  Github
                </Button>
                <Button className="buttonStyle" href="" coloured>
                  Code pen
                </Button>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://tictactoefun.netlify.app"
                  target="_blank"
                >
                  Live
                </Button>
              </CardActions>
              <CardMenu className="buttonStyle" style={{ color: "white" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          {/* Card2        */}
          <div className="projects-grid">
            <Card shadow="5" style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "300px",
                  background:
                    "url(https://i.ibb.co/SvcWHKC/food-Recipe.png) center/ cover",
                }}
              >
                Food Recipe App #2
              </CardTitle>
              <CardText style={{ height: "60px" }}>
                {" "}
                In this App You can Find You favourite Recipes{" "}
              </CardText>
              <CardActions border>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://github.com/ProgrammerAvinash/foodRecipeApp"
                  target="_blank"
                >
                  Github
                </Button>
                <Button className="buttonStyle" href="" coloured>
                  Code pen
                </Button>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://foodsrecipeapp.netlify.app"
                  target="_blank"
                >
                  Live
                </Button>
              </CardActions>

              <CardMenu style={{ color: "white" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <hr />
          {/* card3  */}
          <div className="projects-grid">
            <Card shadow="5" style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "white",
                  height: "300px",
                  background:
                    "url(https://i.ibb.co/qnRhLqy/chatApp.png) center / cover",
                }}
              >
                Real Time Chat App #3
              </CardTitle>
              <CardText style={{ height: "60px" }}>
                This is Real time Chat app , in which You can Send and Recieve
                Messages in Real Time using a Room Name stack Made this App in
                React Js , express Js and Socket.io
              </CardText>
              <CardActions border>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://github.com/ProgrammerAvinash/RealTimeChatApp"
                  target="_blank"
                >
                  Github
                </Button>
                <Button className="buttonStyle" href="" coloured>
                  Code pen
                </Button>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://chatapprealtime.netlify.app/"
                  target="_blank"
                >
                  Live
                </Button>
              </CardActions>

              <CardMenu style={{ color: "white" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <hr />
          {/* card4 */}
          <div className="projects-grid">
            <Card shadow="5" style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "grey",

                  height: "300px",
                  background:
                    "url(https://i.ibb.co/jhQfmCV/tetris.png) center / cover",
                }}
              >
                Tetris Game #4
              </CardTitle>
              <CardText style={{ height: "60px" }}>
                The fun little game made with JavaScript
              </CardText>
              <CardActions border>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://github.com/ProgrammerAvinash/TetrisGame"
                  target="_blank"
                >
                  Github
                </Button>
                <Button className="buttonStyle" href="" coloured>
                  Code pen
                </Button>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://programmeravinash.github.io/TetrisGame/index.html"
                  target="_blank"
                >
                  Live
                </Button>
              </CardActions>

              <CardMenu style={{ color: "white" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <hr />
          {/* card 5 */}
          <div className="projects-grid">
            <Card shadow="5" style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "300px",
                  background:
                    "url(https://i.ibb.co/ngBxfZG/tile-Break.png) center / cover",
                }}
              >
                TileBreakGame #5
              </CardTitle>
              <CardText style={{ height: "60px" }}>
                The fun little game made with JavaScript
              </CardText>
              <CardActions border>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://github.com/ProgrammerAvinash/TileBreak"
                  target="_blank"
                >
                  Github
                </Button>
                <Button className="buttonStyle" href="" coloured>
                  Code pen
                </Button>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://tilebreakgame.netlify.app/"
                  target="_blank"
                >
                  Live
                </Button>
              </CardActions>

              <CardMenu style={{ color: "white" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <hr />
          {/* card 6 */}
          <div className="projects-grid">
            <Card shadow="5" style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "300px",
                  background:
                    "url(https://i.ibb.co/1QNBCTG/minion.png) center / cover",
                }}
              >
                Minion App #6
              </CardTitle>
              <CardText style={{ height: "60px" }}>
                The fun little minion Lannguage translate App Made in JavaScript
              </CardText>
              <CardActions border>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://github.com/ProgrammerAvinash/"
                  target="_blank"
                >
                  Github
                </Button>
                <Button className="buttonStyle" href="" coloured>
                  Code pen
                </Button>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://minionslangapp.netlify.app/"
                  target="_blank"
                >
                  Live
                </Button>
              </CardActions>

              <CardMenu style={{ color: "white" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <hr />

          {/* card 7 */}
          <div className="projects-grid">
            <Card shadow="5" style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "300px",
                  background:
                    "url(https://i.ibb.co/dGqJ3hT/phinies.png) center / cover",
                }}
              >
                Phineas & Ferb App #7
              </CardTitle>
              <CardText style={{ height: "60px" }}>
                Phineas & ferb fun app made with JavaScript , It uses API to
                translate to Phineas & ferb Lannguage
              </CardText>
              <CardActions border>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://github.com/ProgrammerAvinash/Phineas-and-Ferb-App"
                  target="_blank"
                >
                  Github
                </Button>
                <Button className="buttonStyle" href="" coloured>
                  Code pen
                </Button>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://phineasandferbapp.netlify.app/"
                  target="_blank"
                >
                  Live
                </Button>
              </CardActions>

              <CardMenu style={{ color: "white" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <hr />

          {/* card 8 */}
          <div className="projects-grid">
            <Card shadow="5" style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "300px",
                  background:
                    "url(https://i.ibb.co/89RQyC3/flag.png) center / cover",
                }}
              >
                flag-Interpretor App #8
              </CardTitle>
              <CardText style={{ height: "60px" }}>
                MARK 8: Fun Flag Emoji Interpretor App made in React JS helps
                you to know the type of flag emoji
              </CardText>
              <CardActions border>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://github.com/ProgrammerAvinash/flag-Interpretor"
                  target="_blank"
                >
                  Github
                </Button>
                <Button className="buttonStyle" href="" coloured>
                  Code pen
                </Button>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://flaginteoretorapp.netlify.app/"
                  target="_blank"
                >
                  Live
                </Button>
              </CardActions>

              <CardMenu style={{ color: "white" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          {/* card 9 */}
          <div className="projects-grid">
            <Card shadow="5" style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "300px",
                  background:
                    "url(https://i.ibb.co/MZfV9rK/travel.png) center / cover",
                }}
              >
                Travel Diary #9
              </CardTitle>
              <CardText style={{ height: "60px" }}>
                MARK 9: Fun Travel Diary App to suggest best places to visit in
                top Cities.
              </CardText>
              <CardActions border>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://github.com/ProgrammerAvinash/traveldiary"
                  target="_blank"
                >
                  Github
                </Button>
                <Button className="buttonStyle" href="" coloured>
                  Code pen
                </Button>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://traveldiaryapp.netlify.app/"
                  target="_blank"
                >
                  Live
                </Button>
              </CardActions>

              <CardMenu style={{ color: "white" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          {/* card 10 */}

          <div className="projects-grid">
            <Card shadow="5" style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "300px",
                  background:
                    "url(https://i.ibb.co/tCQMVJb/cashregister.png) center / cover",
                }}
              >
                Cash Register App #10
              </CardTitle>
              <CardText style={{ height: "60px" }}>
                This Cash Register App Made in React JS , helps you with counts
                of Notes to be given back to the customer as a Change .
              </CardText>
              <CardActions border>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://github.com/ProgrammerAvinash/Cash-Register-Manager-App"
                  target="_blank"
                >
                  Github
                </Button>
                <Button className="buttonStyle" href="" coloured>
                  Code pen
                </Button>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://cashregistermanager-app.netlify.app/"
                  target="_blank"
                >
                  Live
                </Button>
              </CardActions>

              <CardMenu style={{ color: "white" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <hr />

          {/* card 11 */}
          <div className="projects-grid">
            <Card shadow="5" style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "300px",
                  background:
                    "url(https://i.ibb.co/ygpT1DB/Screenshot-36.png) center / cover",
                }}
              >
                birthday lucky app #11
              </CardTitle>
              <CardText style={{ height: "60px" }}>
                The fun little Birthday lucky app made with JavaScript helps you
                to find out whether your birthday is lucky or not.
              </CardText>
              <CardActions border>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://github.com/ProgrammerAvinash/BirthdayLucky"
                  target="_blank"
                >
                  Github
                </Button>
                <Button className="buttonStyle" href="" coloured>
                  Code pen
                </Button>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://birthdayluckyapp.netlify.app/"
                  target="_blank"
                >
                  Live
                </Button>
              </CardActions>

              <CardMenu style={{ color: "white" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <hr />

          {/* card 12  */}
          <div className="projects-grid">
            <Card shadow="5" style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "300px",
                  background:
                    "url(https://i.ibb.co/k1rk5yK/fun-with-triangle.png) center / cover",
                }}
              >
                Fun With Triangles #12
              </CardTitle>
              <CardText style={{ height: "60px" }}>
                The fun & informative little Fun With Triangles game app made
                with JavaScript helps to understand Triangle concepts
              </CardText>
              <CardActions border>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://github.com/ProgrammerAvinash/Fun-with-Triangles"
                  target="_blank"
                >
                  Github
                </Button>
                <Button className="buttonStyle" href="" coloured>
                  Code pen
                </Button>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://funwithtriangles-app.netlify.app/"
                  target="_blank"
                >
                  Live
                </Button>
              </CardActions>

              <CardMenu style={{ color: "white" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <hr />
          {/* card 13  */}
          <div className="projects-grid">
            <Card shadow="5" style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "300px",
                  background:
                    "url(https://i.ibb.co/GxkCbp3/palindrome.png) center / cover",
                }}
              >
                Birthday-palindrome app #13
              </CardTitle>
              <CardText style={{ height: "60px" }}>
                The fun little App helps you to find your DOB is palindrome or
                not.
              </CardText>
              <CardActions border>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://github.com/ProgrammerAvinash/Birthday-Palindrome"
                  target="_blank"
                >
                  Github
                </Button>
                <Button className="buttonStyle" href="" coloured>
                  Code pen
                </Button>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://birthday-palindromeapp.netlify.app/"
                  target="_blank"
                >
                  Live
                </Button>
              </CardActions>

              <CardMenu style={{ color: "white" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <hr />
          {/* card 14  */}
          <div className="projects-grid">
            <Card shadow="5" style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "300px",
                  background:
                    "url(https://i.ibb.co/0jtb7rw/stock.png) center / cover",
                }}
              >
                stockcalculator app #14
              </CardTitle>
              <CardText style={{ height: "60px" }}>
                Stock Calculator App helps you with managing your profit and
                loss by calculating your P & L .
              </CardText>
              <CardActions border>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://github.com/ProgrammerAvinash/Stock-Calculator-App"
                  target="_blank"
                >
                  Github
                </Button>
                <Button className="buttonStyle" href="" coloured>
                  Code pen
                </Button>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://stockcalculator-app.netlify.app/"
                  target="_blank"
                >
                  Live
                </Button>
              </CardActions>

              <CardMenu style={{ color: "white" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <hr />
          {/* {Card 15} */}
          <div className="projects-grid">
            <Card shadow="5" style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "white",
                  height: "300px",
                  background:
                    "url(https://i.ibb.co/gTKtCPg/Screenshot-39.png) center / cover",
                }}
              >
                Do You Know Me ? #15
              </CardTitle>
              <CardText style={{ height: "60px" }}>
                CLI Game Do you know me or not !
              </CardText>
              <CardActions border>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://github.com/ProgrammerAvinash/Do-U-Know-Me-"
                  target="_blank"
                >
                  Github
                </Button>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://replit.com/@avinashyadav16/Do-U-Know-Me#index.js"
                  target="_blank"
                >
                  replit
                </Button>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://replit.com/@avinashyadav16/Do-U-Know-Me?embed=1&output=1"
                  target="_blank"
                >
                  Live
                </Button>
              </CardActions>

              <CardMenu style={{ color: "white" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <hr />
          {/* card 12  */}
          <div className="projects-grid">
            <Card shadow="5" style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "white",
                  height: "300px",
                  background:
                    "url(https://i.ibb.co/D8XHn1X/Screenshot-38.png) center / cover",
                }}
              >
                Capital Quiz #14
              </CardTitle>
              <CardText style={{ height: "60px" }}>
                CLI App to play Game of Quiz
              </CardText>
              <CardActions border>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://github.com/ProgrammerAvinash/Mark-2--Capital-Quiz-App"
                  target="_blank"
                >
                  Github
                </Button>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://replit.com/@avinashyadav16/Capital-Quiz-App#index.js"
                  target="_blank"
                >
                  Replit
                </Button>
                <Button
                  className="buttonStyle"
                  coloured
                  href="https://replit.com/@avinashyadav16/Capital-Quiz-App?embed=1&output=1"
                  target="_blank"
                >
                  Live
                </Button>
              </CardActions>

              <CardMenu style={{ color: "white" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>

          <hr />
        </div>
        <div className="footer">
          <div className="ProjectSocial-Links translate_social">
            {/* Linked-in */}

            <a
              className="ProjectHoverColor"
              href="https://www.linkedin.com/in/avinash-yadav-588744151/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* instagram */}

            <a
              className="ProjectHoverColor"
              href="https://www.instagram.com/avi_nash_yadav/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fa fa-instagram" />
            </a>

            {/* twiter */}
            <a
              className="ProjectHoverColor"
              href="https://twitter.com/CoderAvinash"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fa fa-twitter-square" aria-hidden="true" />
            </a>

            {/* Github */}
            <a
              className="ProjectHoverColor"
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
export default projects;
