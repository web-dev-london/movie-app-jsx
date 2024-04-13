import React from 'react'

const ListGroup = ({ items, textProperty, valueProperty, onItemSelect, selectedItem }) => {
    const genres =
        items.map((item, index) => {
            const classes =
                item === selectedItem
                    ? 'list-group-item page-link active'
                    : 'list-group-item page-link'
            return (
                <li
                    key={item[valueProperty]}
                    onClick={() => onItemSelect(item)}
                    className={classes}>
                    {item[textProperty]}
                </li>
            )
        })
    return (
        <>
            <ul className="list-group">
                {genres}
            </ul>
        </>
    )
}

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}
export default ListGroup