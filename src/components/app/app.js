import React from 'react';
import {Route, Switch } from 'react-router-dom';
import {HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';
import WithBookstoreService from '../hoc';

const App = ({bookstoreService}) => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={4} total={123}/>
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/cart' component={CartPage} exact/>
            </Switch>
        </main>
    )
}

export default WithBookstoreService()(App);