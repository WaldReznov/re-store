import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import WithBookstoreService from '../hoc';
import {fetchBooks, bookAddedToCart} from '../../actions';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import compose from '../../utils';
import './book-list.css';

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error, onAddedToCart} = this.props;

        if(loading) {
            return <Spinner />
        }

        if(error) {
            return <ErrorIndicator />
        }
        
        return <BookList books={books} onAddedToCart={onAddedToCart}/>
    }
}

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const mapStateToProps = ({books, loading, error}) => {
    return {
        books,
        loading,
        error
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps;
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}

export default compose (
    WithBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps))
    (BookListContainer);