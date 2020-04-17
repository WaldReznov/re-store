const updateShoppintCart = (state, action) => {
  switch(action.type) {
		case 'BOOK_ADDED_TO_CART': 
			return bookAddToCart(state, action);
		case 'BOOK_DECREASE': 
			return bookDecreaseFromCart(state, action);
		case 'BOOK_DELETE': 
			return bookRemoveFromCart(state, action);
		default: 
			return state.shoppingCart;
  }
}

const bookAddToCart = (state, action) => {
  const bookId = action.payload;
  const book = state.bookList.books.find((book) => book.id === bookId);

  const cartItems = state.shoppingCart.cartItems.slice(0);
  const index = cartItems.findIndex(item => item.id === book.id);

  if(index > -1) {
    cartItems[index].count++;
    cartItems[index].total += book.price;
  } else {
    cartItems.push(newItem(book));
  }

  return {
      cartItems: cartItems,
      orderTotal: calculateTotalPrice(cartItems)
  };
}

const bookDecreaseFromCart = (state, action) => {
  const bookId = action.payload;
  const book = state.bookList.books.find((book) => book.id === bookId);

  const cartItems = state.shoppingCart.cartItems.slice(0);

	const index = cartItems.findIndex(item => item.id === book.id);
	if(cartItems[index].count > 1) {
		cartItems[index].count--;
		cartItems[index].total -= book.price;
	}

  return {
      cartItems: cartItems,
      orderTotal: calculateTotalPrice(cartItems)
  };
}


const bookRemoveFromCart = (state, action) => {
	const { cartItems } = state.shoppingCart; 
  const bookId = action.payload;
  const book = state.bookList.books.find((book) => book.id === bookId);

  const index = cartItems.findIndex(item => item.id === book.id);
  const items = [
      ...cartItems.slice(0, index),
      ...cartItems.slice(index + 1)
  ]

  return {
		cartItems: items,
		orderTotal: calculateTotalPrice(items)
  };
}

const calculateTotalPrice = (items) => {
  return items.reduce((sum, item) => sum + item.total, 0);
}

const newItem = ({id, name, price}) => {
	return {
		id, 
		name, 
		count: 1, 
		total: price
	}
}

export default updateShoppintCart;