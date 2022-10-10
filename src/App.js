import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main.js";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout className="fixed_Position">
        <Header
          className="header-color fixed_Position"
          title={
            <Link
              className="Navbar"
              style={{ textDecoration: "none", color: "white" }}
              to="/"
            >
              Avinash Yadav
            </Link>
          }
        >
          <Navigation>
            <Link to="/resume" className="Navbar">
              Resume
            </Link>
            <Link to="/blog" className="Navbar">
              Blogs
            </Link>
            <Link to="/projects" className="Navbar">
              Projects
            </Link>
            <Link to="/contact" className="Navbar">
              Contact
            </Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link
              className="Navbar"
              style={{ textDecoration: "none", color: "grey" }}
              to="/"
            >
              HOME
            </Link>
          }
        >
          <Navigation>
            <Link to="/resume" className="Navbar">
              Resume
            </Link>
            <Link to="/blog" className="Navbar">
              Blogs
            </Link>
            <Link to="/projects" className="Navbar">
              Projects
            </Link>
            <Link to="/contact" className="Navbar">
              Contact
            </Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
