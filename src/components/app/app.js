import React from 'react';
import {Route, Switch } from 'react-router-dom';
import {HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';
import WithBookstoreService from '../hoc';
import { compose } from 'redux';
import { connect } from 'react-redux';

const App = ({cartItems, orderTotal}) => {

    const books = getCountBooks(cartItems);

    return (
        <main role="main" className="container">
            <ShopHeader numItems={books} total={orderTotal}/>
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/cart' component={CartPage} exact/>
            </Switch>
        </main>
    )
}

const getCountBooks = (books) => {
    return books.reduce((acc, item) => acc + item.count, 0);
} 

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
    return {
        cartItems,
        orderTotal
    }
}

export default compose(WithBookstoreService(),  connect(mapStateToProps))(App);