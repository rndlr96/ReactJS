import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {}

  componentDidMount() {
    this.Get_Movies();
  }

  Get_Movies = async () => {
    const movies = await this.Call_Api()
    this.setState({movies})
  }

  Call_Api = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className= {movies ? "App" : "App--loading"}>
      {
        this.state.movies ? this.Render_Movies() : 'Loading'
      }
      </div>);
  }

  Render_Movies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie title={movie.title} poster={movie.medium_cover_image}
                    rating={movie.rating} synopsis={movie.synopsis}
                    genres={movie.genres} key={movie.id}/>
    })
    return movies
  }
}

export default App;
