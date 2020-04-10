import React from 'react';
import {BookstoreServiceConsumer} from '../bookstore-service-context';

const WithBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (booksStoreService) => {
                        return <Wrapped {...props} bookstoreService={booksStoreService}/>
                    }
                }
            </BookstoreServiceConsumer>
        )
    }
}

export default WithBookstoreService;