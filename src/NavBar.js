import React from 'react';
import './NavBar.css';
import logo from "./logo.png"
import resume from "./Eng_William.pdf"


const aboutPage = "/about";
const homePage = "/work";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <nav>
        <ul>
          <li><a className="logo" href={homePage}><img src={logo} alt='Eng-William-Logo'/></a></li>
          <li><a className="links" href={homePage}>Work</a></li>
          <li><a className="links" href={aboutPage}>About</a></li>
          <li><a className="links" href={resume} target="_blank">Resume</a></li>
        </ul>
      </nav>
    );
  }
};


export default NavBar;