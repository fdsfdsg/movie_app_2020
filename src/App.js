import React, { Component } from 'react';
import './App.css';
import { renderIntoDocument } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import Movie from './movie';

class App extends Component {

  state = {}

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {

    const movies = this.state.movies.map(movie => {
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres} 
        synopsis={movie.synopsis}
        />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json/sort_by=rating')
      .then(res => res.json())
      .then(json => json.data.movies)
      // .then(json => console.log(json))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "loading.."}
      </div>
    );
  }
}

export default App;