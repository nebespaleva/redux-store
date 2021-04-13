import React from 'react';
import {BookstoreServiceConsumer} from '../bookstore-service-contex';

const WithBookstoreService = () => (Wrapped) => {
    return (props) => {
        return(
            <BookstoreServiceConsumer>
                {
                    (bookstoreservice) => {
                        return(
                            <Wrapped
                                {...props}
                                bookstoreservice={bookstoreservice}
                            />
                        )
                    }
                }
            </BookstoreServiceConsumer>
        )
    }
};

export default WithBookstoreService;