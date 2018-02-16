// React
import React, { Component } from "react";

// Components
import Album from "./Album";

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const AlbumTimeline = (props) => {

  if (props.error) {
    return (
      <div className='errorMessage'>
        <p>Sorry, there was a problem with your search.</p>
        <p>Try a different artist name and try again.</p>
      </div>
    )
  }

  if (props.albumList.length > 0) {
    let albums = props.albumList.map((albumInfo, index) => { 
      return <Album artistInfo={albumInfo} key={index} /> 
    })
    return (
      <div className="albumTimeline">
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