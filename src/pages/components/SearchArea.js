// React
import React, { Component } from "react";

// Assets/utils
import icon from "../../assets/slash.svg";
import artistList from '../../assets/artistList';

// Components
import AutoCompleter from './AutoCompleter';

// Redux
import { updateUserSearchboxInput, clearUserInput, fetchAlbums } from '../../actions/actionCreator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class SearchArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularArtists: artistList
    }
    this.handleInput = this.handleInput.bind(this);
    this.clearSearchTerm = this.clearSearchTerm.bind(this);
    this.search = this.search.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
  }

  handleInput(e) {
    const searchTerm = e.target.value;
    this.props.updateUserSearchboxInput(searchTerm)
  }

  // hook up to redux!
  clearSearchTerm() {
    this.props.clearUserInput()
  }

  handleKeys(e) {
    if (e.keyCode === 13) {
      this.search()
    }
  }

  search() {
    this.props.fetchAlbums(this.props.userSearchboxInput)
  }

  render() {
    return (
      <div className="searchArea">
        <input
          className="searchArea__input"
          type="text"
          placeholder="enter an artist"
          value={this.props.userSearchboxInput}
          tabIndex="1"
          onChange={e => this.handleInput(e)}
          onKeyDown={this.handleKeys}
        />
        <AutoCompleter  menuItems={this.state.popularArtists} />
        <button
          className="searchArea__clearInput"
          onClick={this.clearSearchTerm}
        >        
          <img
            className="searchArea__clearInputIcon"
            src={icon}
            alt="clear search icon"
          />
        </button>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    updateUserSearchboxInput: updateUserSearchboxInput,
    fetchAlbums: fetchAlbums,
    clearUserInput: clearUserInput
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchArea)
