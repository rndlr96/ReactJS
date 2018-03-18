import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from "react-lines-ellipsis"

class Movie extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    synopsis: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired
  }

  render() {
    return (<div className="Movie">
      <div className="Movie_Columns">
        <MoviePoster poster={this.props.poster} alt={this.props.title}/>
      </div>
      <div className="Movie_Cloumns">
        <h1>{this.props.title}
        </h1>
        <div className="Movie_Genres">
          {this.props.genres.map((genres, index) => <MovieGenres genres={genres} key={index}/>)}
        </div>
        <div className="Movie_Synopsis">
          <LinesEllipsis
            text={this.props.synopsis}
            maxLine='3'
            ellipsis='      ...'
            trimRight
            basedOn='letters'
          />
        </div>
      </div>
    </div>)
  }
}

class MoviePoster extends Component {

  static propTypes = {
    poster: PropTypes.string.isRequired
  }

  render() {
    return (<img src={this.props.poster} alt={this.props.alt} title={this.props.alt} className="Movie_Poster"/>)
  }
}

class MovieGenres extends Component {

  static propTypes = {
    genres: PropTypes.array.isRequired
  }

  render() {
    return (<span className="Movie_Genres">{this.props.genres}</span>)
  }
}

export default Movie
