import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title : "Matrix",
            poster : "http://image.cine21.com/resize/cine21/poster/2016/0907/14_41_49__57cfa89dd00cd[X230,330].jpg"
          },
          {
            title : "Full Metal Jacket",
            poster : "http://image.cine21.com/resize/cine21/poster/2009/1007/M0010010_[X230,330].jpg"
          },
          {
            title : "Oldboy",
            poster : "http://image.cine21.com/resize/cine21/poster/2013/1216/15_03_49__52ae97c541f06[X230,330].jpg"
          },
          {
            title : "Star Wars",
            poster : "http://image.cine21.com/resize/cine21/poster/2005/0302/M0010017_[X230,330].jpg"
          },
          {
            title : "transformer",
            poster : "https://imgc.allpostersimages.com/img/posters/tranformers-age-of-extinction_u-L-F76R680.jpg?src=gp&w=300&h=375"
          }
        ]
      })
    },1000)
  }

  Render_Movies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title = {movie.title} poster = {movie.poster} key = {index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this.Render_Movies() : 'Loading'}
      </div>
    );
  }
}


export default App;
