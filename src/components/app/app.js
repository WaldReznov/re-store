import React from 'react';
import withBookstoreService from '../hoc';

const App = ({bookstoreService}) => {
    console.table(bookstoreService.getBooks());
    return <div>App</div>
}

export default withBookstoreService()(App);