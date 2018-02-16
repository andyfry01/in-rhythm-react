// React
import React, { Component } from "react";

// Components
import Album from "./Album";

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const AlbumTimeline = (props) => {

  if (props.albumList.length > 0) {
    let albums = props.albumList.map(albumInfo => <Album artistInfo={albumInfo} />)
    return (
      <div>
        {albums}
      </div>
    )
  } else {
    return (
      <div>
      </div>
    );

  }
}


const mapStateToProps = state => {
  return state
}

export default connect(
  mapStateToProps,
)(AlbumTimeline)
