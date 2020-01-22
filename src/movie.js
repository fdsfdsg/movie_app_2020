import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie.css';

/*class Movie extends Component{

        static propTypes = {
        title: PropTypes.string,
        poster: PropTypes.string
    }

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <MoviePoster poster={this.props.poster} />
            </div>
        );
    }
}*/
/*
class MoviePoster extends Component{
    render(){
        //console.log(this.props);
        return(
            <img src ={poster} alt="MoviePoster" width="100" height="100" />
        );
    }
}*/


function Movie({title,poster}){
    return(
        <div>
                <h1>{title}</h1>
                <h1>{poster}</h1>
              {/*<MoviePoster poster={poster} />*/}
        </div>
    )
}

function MoviePoster({poster}){
    return(
        <img src ={poster} alt="MoviePoster" width="100" height="100" />
    )
}

export default Movie;