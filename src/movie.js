import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie.css';

function Movie({ title, poster, genres, synopsis }) {
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title} />
            </div>

            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genres, index) => <MovieGenres genres={genres} key={index} />)}
                </div>
                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

function MoviePoster({ poster }) {
    return (
        <img src={poster} alt="MoviePoster" />
    )
}

function MovieGenres({genres}){
    return(
        <span className="Movie__Genre">{genres}</span>
    )
}


export default Movie;

/*
class Movie extends Component{
    render(){
        return(
            <div className="Movie">
                <h1>{this.props.title}</h1>
                <MoviePoster poster={this.props.poster} />
            </div>
        );
    }
}

class MoviePoster extends Component{
    render(){
        //console.log(this.props);
        return(
            <img src ={this.props.poster} alt="MoviePoster" />
        );
    }
}*/