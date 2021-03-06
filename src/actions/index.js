const booksRequested = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

const bookDecrease = (bookId) => {
    return {
        type: 'BOOK_DECREASE',
        payload: bookId
    }
}

const bookRemove = (bookId) => {
    return {
        type: 'BOOK_DELETE',
        payload: bookId
    }
}

const fetchBooksOld = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => {
            dispatch(booksLoaded(data));
        })
        .catch((error) => dispatch(booksError(error)));
    }

const fetchBooks = (bookstoreService) => () => (dispatch) => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)));
    
}

export {
    fetchBooks,
    bookAddedToCart,
    bookDecrease,
    bookRemove
};