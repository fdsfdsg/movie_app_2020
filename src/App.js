import React, { Component } from 'react';
import './App.css';
import { renderIntoDocument } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import Movie from './movie';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: [],
      poster: []
    }
  }

  UNSAFE_componentWillMount() {
    this._getMovies();
  }

  _renderDatas = () => {
    const i = [1,2,3,4,5,5,6,7,8,9,10];
    const datas = this.state.movies.map((data, index) => {
      return <Movie title={data.title} poster={data.poster} key={index} />
    })
    return datas;
  }

  _getMovies = async () => {
    const datas = await this._callApi()
    this.setState({
      datas
    })
  }

  _callApi = () => {
    return fetch('http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=e55a7610dadf4359d3729ab503c7205f')
      .then(res => res.json())
      .then(json => json.movieListResult.movieList/*this.setState({
        movies : [
        {
          title: json.movieListResult.movieList[9].movieNm,
          poster: json.movieListResult.movieList[9].movieCd
        }
      ]

    })*/
    )
    .then(err => console.log(err));
  }

  render() {
    return (
      <h1>{this.state.movies ? this._renderDatas() : "loading.."}</h1>
      /*<div className="App"> </div>*/
    );
  }
}

export default App;