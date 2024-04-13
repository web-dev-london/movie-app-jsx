import React from 'react'

const Like = ({ liked, onLikeToggle }) => {
    let classes = 'fa fa-heart';
    if (!liked) classes += '-o';
    return (
        <>
            <i style={{ cursor: 'pointer' }}
                onClick={onLikeToggle}
                className={classes} aria-hidden="true"></i>
        </>
    )
}




export default Like;