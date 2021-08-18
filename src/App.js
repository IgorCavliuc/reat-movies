import React, { Component } from "react";
import "./App.css";
import Movies from "./component/Movies/Movies";
import Header from "./component/Header/Header";
import Preloader from "./component/Preloader/Preloader";
import Search from "./component/Search/Search";

const API_KEY = process.env.REACT_APP_API_KEY

export default class App extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount = () => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=all`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err)=>{
        console.log(err)
        this.setState({loading:false})
      })
  };

  onSearchFunc = (str = "all", radio = "all") => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}=${str}${
        radio !== "all" ? `&type=${radio}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <div>
        <Header />
        <div className="search">
          <Search onSearchFunc={this.onSearchFunc} />
        </div>
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </div>
    );
  }
}
