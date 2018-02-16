import React, { Component } from 'react';

import LazyLoad from 'react-lazyload';

const Album = (props) => {
  return (
    <LazyLoad height={200} offset={100}>
      <div className="album">
        <p class="album__name">{props.artistInfo.albumName}</p>
        <p class="album__year">{props.artistInfo.releaseYear}</p>
        <img  className="album__image" 
              src={props.artistInfo.albumImg} 
              alt={`${props.artistInfo.albumName} cover image`} />
      </div>
    </LazyLoad>
  );
}

export default Album;
