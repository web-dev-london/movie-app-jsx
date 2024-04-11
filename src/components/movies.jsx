import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService';
import Count from './count';

class Movies extends Component {
    state = {
        movies: getMovies(),
    }

    /* Life Cycle Hooks Update phase */

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }

    componentWillUnmount() {
        console.log('Movie - Unmount');
    }


    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies: movies })
    }

    render() {
        console.log('movies-rendered');
        return (
            <>
                <Count movie={this.state.movies} />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map((movie) => {
                            return (
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                        <button
                                            onClick={() => this.handleDelete(movie)}
                                            className='btn btn-danger btn-small'
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}

export default Movies;