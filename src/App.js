import React from 'react';
import './App.css';
import logo from "./logo.png"
import resume from "./Eng_William.pdf"


const aboutPage = "/about";
const homePage = "/work";

function App() {
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  handleWorkClick(event) {
    event.preventDefault();
    window.scrollTo(0, 0);
  }

  handleLogoClick(event) {
    event.preventDefault();
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


export default App;