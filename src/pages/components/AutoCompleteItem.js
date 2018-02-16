import React from 'react';

const AutoCompleteItem = (props) => {
  
  function handleItemFocus() {
    props.updateSelectedArtist(props.index, false)
  }

  function handleClick() {
    props.updateSelectedArtist(props.index, true)
  }

  return (
    <div  className="searchArea__autoCompleteItem" 
          tabIndex={`${props.index + 2}`}
          key={props.index} 
          onFocus={handleItemFocus} 
          onClick={handleClick} > 
        <span>{props.artistName}</span> 
    </div>
  )
}



export default AutoCompleteItem