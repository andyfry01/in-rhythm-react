// React
import React, { Component } from "react";

// Redux
import { updateDropdownMenuSelection, fetchAlbums } from '../../actions/actionCreator'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

// Components
import AutoCompleteItem from './AutoCompleteItem'


class AutoCompleter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestions: ['']
    }
    this.updateAutocompleteSuggestions = this.updateAutocompleteSuggestions.bind(this)
    this.updateSelectedArtist = this.updateSelectedArtist.bind(this)
    this.handleKeys = this.handleKeys.bind(this)
    this.search = this.search.bind(this)
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.userSearchboxInput !== this.props.userSearchboxInput) {
      this.updateAutocompleteSuggestions(nextProps.userSearchboxInput)
    }
  }

  updateAutocompleteSuggestions(searchTerm) {
    let suggestions = this.props.menuItems.filter(artistName => {
      artistName = artistName.toLowerCase()
      searchTerm = searchTerm.toLowerCase()
      return artistName.indexOf(searchTerm) > -1
    })
    if (suggestions.length > 0) {
      return this.setState(state => { return { suggestions: suggestions } } )
    } 
    return this.setState(state => { return { suggestions: ['hit enter to search'] } } )
  }

  updateSelectedArtist(index, performSearch) {
    const suggestions = this.state.suggestions
    this.props.updateDropdownMenuSelection(suggestions[index])
    if (performSearch) {
      this.search()
    }
  }

  handleKeys(e) {
    if (e.keyCode === 13) {
      this.search()
    }
  }

  search() {
    this.props.fetchAlbums(this.props.dropdownMenuSelection)
  }

  render() {
    const autoCompleteSuggestions = this.state.suggestions.map((artistName, index) => {
      return (<AutoCompleteItem index={index} 
                                artistName={artistName} 
                                isFocussed={this.state.focussedArtist}
                                updateSelectedArtist={this.updateSelectedArtist} 
                                handleSearch={this.search} />)
    })
    return (
      <div  className={`searchArea__autoCompleteMenu ${this.props.visibilityToggler}`}
            onKeyDown={this.handleKeys} >
        {autoCompleteSuggestions}
      </div>)
  }
}


const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    updateDropdownMenuSelection: updateDropdownMenuSelection,
    fetchAlbums: fetchAlbums
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoCompleter);