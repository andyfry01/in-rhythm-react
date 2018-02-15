import React, { Component } from "react";
import icon from "../../assets/slash.svg";

class SearchArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.clearSearchTerm = this.clearSearchTerm.bind(this);
  }

  handleInput(e) {
    const searchTerm = e.target.value;
    this.setState((state, props) => {
      return { searchTerm: searchTerm };
    });
  }

  clearSearchTerm() {
    this.setState((state, props) => {
      return { searchTerm: "" };
    });
  }

  render() {
    return (
      <div className="searchArea">
        <input
          className="searchArea__input"
          type="text"
          placeholder="enter an artist"
          value={this.state.searchTerm}
          onChange={e => this.handleInput(e)}
        />
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

export default SearchArea;
