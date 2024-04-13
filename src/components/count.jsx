import React from 'react';

// Stateless Functional Component

const Count = ({ movie, filtered }) => {
    return (
        <>
            {movie.length === 0
                ? <p>There are no movies in the database.</p>
                : <p>Showing {filtered} movies in the database.</p>}
        </>
    )
}


export default Count;