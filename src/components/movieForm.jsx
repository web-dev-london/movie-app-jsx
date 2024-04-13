import React from 'react'

const MovieForm = ({ match, history }) => {
    return (
        <>
            <h2>MovieForm {match.params.id}</h2>
            <button className="btn btn-primary" onClick={() => history.push('/movies')} >Save</button>
        </>
    )
}

export default MovieForm