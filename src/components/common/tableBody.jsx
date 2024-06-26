import React, { Component } from 'react'
import _ from 'lodash';



class TableBody extends Component {

    renderCell = (item, column) => {
        if (column.content)
            return column.content(item)
        return _.get(item, column.path)
    }

    createKey = (item, column) => {
        return item._id + (column.path || column.key)
    }

    render() {
        const { data, columns } = this.props;

        const movie =
            data.map((item) => {
                return (

                    <tr
                        key={item._id}
                    >
                        {columns.map(column =>
                            <td key={this.createKey(item, column)}>
                                {this.renderCell(item, column)}
                            </td>)}
                    </tr>
                )
            })


        return (
            <>
                <tbody>
                    {movie}
                </tbody>
            </>
        );
    }
}

export default TableBody;