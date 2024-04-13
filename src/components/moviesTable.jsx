import React, { Component } from 'react';
import Like from './common/like';
import Table from './common/table';
import { Link } from 'react-router-dom';

class MoviesTable extends Component {
    columns = [
        {
            path: 'title', label: 'Title',
            content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        {
            key: 'like', content: movie => <Like
                liked={movie.liked}
                onLikeToggle={() => this.props.handleLike(movie)}
            />
        },
        {
            key: 'delete', content: movie => <button
                onClick={() => this.props.handleDelete(movie)}
                className='btn btn-danger btn-small'
            >
                Delete
            </button>
        },
    ]

    render() {
        const { movies, sortColumn, onSort } = this.props
        return (
            <>
                <Table
                    data={movies}
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
            </>
        )
    }
}

export default MoviesTable;