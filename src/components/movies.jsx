import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService';
import Count from './count';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import MoviesTable from './moviesTable';
import ListGroup from './common/listGroupt';
import { getGenres } from '../services/fakeGenreService';
import _ from 'lodash'



class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn: { path: 'title', order: 'asc' }
    }

    componentDidMount() {
        const genres = [{ name: 'All Genre', _id: '' }, ...getGenres()]
        this.setState({ movies: getMovies(), genres })
    }


    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies: movies })
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page })
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies })
    }

    handleGenreSelect = (genre) => {
        this.setState({ selectedGenre: genre, currentPage: 1 })
    }

    handleSort = (sortColumn) => {
        this.setState({ sortColumn });
    }

    getPagedData = () => {
        const { pageSize,
            currentPage,
            sortColumn,
            selectedGenre,
            movies: allMovies
        } = this.state

        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(m => m.genre._id === selectedGenre._id)
            : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const movies = paginate(sorted, currentPage, pageSize)

        return { totalCount: filtered.length, data: movies }
    }


    render() {
        const { pageSize,
            currentPage,
            sortColumn,
        } = this.state

        const { totalCount, data: movies } = this.getPagedData();

        return (
            <>

                <div className="row my-5">
                    <div className="col-2">
                        <ListGroup
                            items={this.state.genres}
                            selectedItem={this.state.selectedGenre}
                            onItemSelect={this.handleGenreSelect}
                        />
                    </div>
                    <div className="col">
                        <Count
                            filtered={totalCount}
                            movie={this.state.movies}
                        />
                        <MoviesTable
                            movies={movies}
                            sortColumn={sortColumn}
                            handleLike={this.handleLike}
                            handleDelete={this.handleDelete}
                            onSort={this.handleSort}
                        />
                        <Pagination
                            itemsCount={totalCount}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default Movies; 