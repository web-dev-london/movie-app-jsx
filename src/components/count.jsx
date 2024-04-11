import React from 'react';

// Stateless Functional Component

const Count = ({ movie }) => {
    console.log('count - rendered')
    return (
        <>
            {movie.length === 0
                ? <p>There are no movies in the database.</p>
                : <p>Showing {movie.length} movies in the database.</p>}
        </>
    )
}


export default Count;