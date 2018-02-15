import React, { Component } from "react";
import testImg from "../../assets/test-img.jpg";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__lowerLayer">
          <div className="header__image">
            <img alt="header image" src={testImg} />
          </div>
          <div className="header__gradient"></div>
        </div>
        <div className="header__upperLayer">
          <div className="header__textBox">
            <h1 className="header__headerText">In Rhythm <br /> Album Browser</h1>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
