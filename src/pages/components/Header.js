import React, { Component } from "react";
import turntable from "../../assets/turntable.jpeg";
import albums from "../../assets/albums.jpg";
import casette from "../../assets/casette.jpg";

const Header = () => {
  const images = [turntable, albums, casette]
  const randInt = Math.floor(Math.random() * (2 - 0 + 1)) + 0
  const headerImg = images[randInt]
  return (
    <header className="header">
      <div className="header__lowerLayer">
        <div className="header__image">
          <img alt="header image" src={headerImg} />
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

export default Header;
