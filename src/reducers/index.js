const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_BOOKS_REQUEST': 
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };
        case 'FETCH_BOOKS_SUCCESS': 
            return {
                ...state,
                books: action.payload,
                loading: false, 
                error: null
            };
        case 'FETCH_BOOKS_FAILURE': 
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case 'BOOK_ADDED_TO_CART': 
            return bookAddToCart(state, action);
        case 'BOOK_DECREASE': 
            return bookDecreaseFromCart(state, action);
        case 'BOOK_DELETE': 
            return bookRemoveFromCart(state, action);
        default: 
            return state;
    }
}

const bookAddToCart = (state, action) => {
    const bookId = action.payload;
    const book = state.books.find((book) => book.id === bookId);
    const newItem = {
        id: book.id, 
        name: book.name, 
        count: 1, 
        total: book.price
    };

    const cartItems = state.cartItems.slice(0);
    const index = state.cartItems.findIndex(item => item.id === book.id);

    if(index > -1) {
        cartItems[index].count++;
        cartItems[index].total += book.price;
    } else {
        cartItems.push(newItem);
    }

    const total = cartItems.reduce((sum, item) => sum + item.total, 0);

    return {
        ...state,
        cartItems: cartItems,
        orderTotal: total
    };
}

const bookDecreaseFromCart = (state, action) => {
    const bookId = action.payload;
    const book = state.books.find((book) => book.id === bookId);

    const cartItems = state.cartItems.slice(0);

    const index = state.cartItems.findIndex(item => item.id === book.id);
    cartItems[index].count--;
    cartItems[index].total -= book.price;

    const total = cartItems.reduce((sum, item) => sum + item.total, 0);

    return {
        ...state,
        cartItems: cartItems,
        orderTotal: total
    };
}


const bookRemoveFromCart = (state, action) => {
    const bookId = action.payload;
    const book = state.books.find((book) => book.id === bookId);

    const cartItems = state.cartItems.slice(0);

    const index = cartItems.findIndex(item => item.id === book.id);
    const items = [
        ...cartItems.slice(0, index),
        ...cartItems.slice(index + 1)
    ]

    const total = items.reduce((sum, item) => sum + item.total, 0);

    return {
        ...state,
        cartItems: items,
        orderTotal: total
    };
}

export default reducer;