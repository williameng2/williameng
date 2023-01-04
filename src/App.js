import React from 'react';
import './App.css';
import logo from "./logo.png"
import resume from "./Eng_William.pdf"

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
  render() {
    return(
      <div className='navbar'>
        <div><img src={logo} className="logo" alt='Eng-William-Logo' ></img></div>
        <button type="button">Work</button>
        <button type='button'>About</button>
        <a href={resume} target="_blank">Resume</a>
      </div>
    );
  }
};


export default App;