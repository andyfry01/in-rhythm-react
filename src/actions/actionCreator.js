export const updateUserSearchboxInput = input => {
  return {
    type: 'SET_USER_INPUT',
    userSearchboxInput: input
  }
}

export const updateDropdownMenuSelection = selection => {
  return {
    type: 'SET_DROPDOWN_SELECTION',
    dropdownMenuSelection: selection
  }
}

export function fetchAlbums(searchTerm) {
  return function(dispatch) {
    dispatch(requestAlbums(searchTerm))
    searchTerm = encodeURI(searchTerm)
    return fetch(`https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=album&explicit=yes`)
      .then(response => response.json())
      .then(json => dispatch(receiveAlbumList(json)))
      .catch(error => dispatch(requestFailed(error)))
  }
}

export function clearUserInput(){
  return {
    type: 'CLEAR_USER_INPUT'
  }
}


function requestAlbums(searchTerm) {
  return {
    type: 'REQUEST_ALBUMS',
    albumList: [],
    searchTerm: searchTerm
  }
}

function requestFailed(error) {
  return {
    type: 'REQUEST_FAILED',
    error: error
  }
}

function receiveAlbumList(albumList) {
  console.log('receiving albums');
  console.log('albumList');
  console.log(albumList);
  if (albumList.results.length === 0) {
    return {
      type: 'REQUEST_FAILED'
    }
  }
  let albumInfo = albumList.results.map((album) => { 
    return {
      albumName: album.collectionName, 
      // get just the release year
      releaseYear: parseInt(album.releaseDate.slice(0, 4)),
      // trick itunes into giving us a bigger image
      albumImg: album.artworkUrl100.replace('100x100bb', '500x500bb')
    }
  }).sort((a, b) => a.releaseYear - b.releaseYear)
  return {
    type: 'RECEIVE_ALBUMS',
    albumList: albumInfo
  }
}