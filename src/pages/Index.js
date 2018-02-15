// React
import React, { Component } from "react";

// CSS
import "./css/index.css";
import "./css/reset.css";

// Components
import AlbumTimeline from "./components/AlbumTimeline";
import Header from "./components/Header";
import SearchArea from "./components/SearchArea";

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchArea />
        <AlbumTimeline />
      </div>
    );
  }
}

export default Index;
