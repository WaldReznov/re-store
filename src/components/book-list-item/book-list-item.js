import React from 'react';
import './book-list-item.css';

const BookListItem = ({book}) => {
    const {name, author, price, coverImage} = book;

    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="img"/>
            </div>
            <div className="book-details">
                <span className="book-title">{name}</span>
                <div className="book-author">{author}</div>
                <div className="book-price">{price}</div>
                <button className="btn btn-info add-to-cart">Add to cart</button>
            </div>
        </div>
    )
}

export default BookListItem;