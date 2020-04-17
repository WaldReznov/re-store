import updateBookList from './update-book-list';
import updateShoppintCart from './update-shopping-cart';

const initialState = {
    bookList: {
        books: [],
        loading: true,
        error: null,
    },
    shoppingCart: {
        cartItems: [],
        orderTotal: 0
    }
}

const reducer = (state = initialState, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppintCart(state, action)
    }
}

export default reducer;