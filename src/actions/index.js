const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCES',
        payload: newBooks
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

const bookAddToCart = (bookId) => {
    return {
        type: 'ADD_BOOK_TO_CART',
        payload: bookId
    }
}

const bookDecreaseFromCart = (bookId) => {
    return {
        type: 'DECREASE_BOOK_FROM_CART',
        payload: bookId
    }
}

const bookDeleteFromCart = (bookId) => {
    return {
        type: 'DELETE_BOOK_FROM_CART',
        payload: bookId
    }
}

const fetchBooks = (bookstoreservice, dispatch) => () => {
    dispatch(booksRequested());
    bookstoreservice.getBooks()
    .then((data) => {
        dispatch(booksLoaded(data));
    })
    .catch((err) => {
        dispatch(booksError(err));
    });
}

export {
    fetchBooks,
    bookAddToCart,
    bookDecreaseFromCart,
    bookDeleteFromCart
};