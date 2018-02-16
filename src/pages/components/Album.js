import React, { Component } from 'react';

import LazyLoad from 'react-lazyload';

const Album = (props) => {
  return (
    <LazyLoad height={100} offset={50}>
      <div className="album">
        <div className="alubmTimeline__timelineBar"></div>
        <div className="album__year">
          <p>{props.artistInfo.releaseYear}</p>
        </div>
        <div className="album__horizontalBar"></div>

        <div className="album__main">
          <div className="album__title">
            <p>{props.artistInfo.albumName}</p>
          </div>
          <div className="album__image">
            <img  src={props.artistInfo.albumImg} 
                  alt={`${props.artistInfo.albumName} cover image`} />
          </div>
        </div>
      </div>
    </LazyLoad>
  );
}

export default Album;