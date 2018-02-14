// React
import React, { Component } from "react";

// Components
import AlbumTimeline from "./components/AlbumTimeline";
import HeaderImg from "./components/HeaderImg";
import SearchArea from "./components/SearchArea";

class Index extends Component {
  render() {
    return (
      <div>
        <h1>Hello from index</h1>
        <HeaderImg />
        <SearchArea />
        <AlbumTimeline />
      </div>
    );
  }
}

export default Index;
 