import React, { Component } from "react";
import "./Search.css";

export default class Search extends Component {
  state = {
    search: "",
    radio: "all",
  };

  onSearchChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  onRadioChange = (e) => {
    this.setState(
      () => ({
        radio: e.target.dataset.type,
      }),
      () => {
        this.props.onSearchFunc(this.state.search, this.state.radio);
      }
    );
  };

  onKeySearch = (e) => {
    if (this.state.search.length >= 3) {
      if (e.key === "Enter") {
        this.props.onSearchFunc(this.state.search, this.state.radio);
      }
    }
  };
  onHandleClick = () => {
    if (this.state.search.length >= 3) {
      this.props.onSearchFunc(this.state.search, this.state.radio);
    }
  };

  render() {
    return (
      <div className=" height">
        <div className="col s12">
          <div className="input-field ">
            <input
              placeholder="Search"
              name="search"
              type="search"
              className="validate"
              value={this.state.search}
              onChange={this.onSearchChange}
              onKeyDown={this.onKeySearch}
            />
          </div>
        </div>

        <a
          onClick={this.onHandleClick}
          className="waves-effect waves-light btn"
        >
          button
        </a>
        <div className="flex">
          <p>
            <label>
              <input
                className="with-gap"
                name="group1"
                type="radio"
                data-type="all"
                onChange={this.onRadioChange}
                checked={this.state.radio === "all"}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="group1"
                type="radio"
                data-type="movie"
                onChange={this.onRadioChange}
                checked={this.state.radio === "movie"}
              />
              <span>Movies Only</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="group1"
                type="radio"
                data-type="series"
                onChange={this.onRadioChange}
                checked={this.state.radio === "series"}
              />
              <span>Series Only</span>
            </label>
          </p>
        </div>
      </div>
    );
  }
}
