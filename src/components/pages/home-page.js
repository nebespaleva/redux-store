import React from 'react';
import BookList from '../book-list';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';


const HomePage = () => {
    return(
        <React.Fragment>
            <BookList/>
            <ShoppingCartTable/>
        </React.Fragment>
    )
}

export default HomePage;