import React, {Fragment} from 'react';
import './book-list-item.css';

const BookListItem = ({book}) => {
    const {name, author} = book;
    
    return (
        <Fragment>
            <div>{name}</div>
            <div>{author}</div>
        </Fragment>
    )
}

export default BookListItem;