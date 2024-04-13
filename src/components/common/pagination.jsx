import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    const listItems =
        pages.map(page => {
            const classess = page === currentPage
                ? 'page-item active'
                : 'page-item';
            return (
                <li key={page} className={classess}>
                    <span
                        onClick={() => onPageChange(page)}
                        className='page-link'
                    >
                        {page}
                    </span>
                </li>
            )
        })

    return (
        <>
            <nav >
                <ul className="pagination ">
                    {listItems}
                </ul>
            </nav>
        </>
    )
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination;