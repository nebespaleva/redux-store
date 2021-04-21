const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    totalOrder: 0
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'FETCH_BOOKS_REQUEST': 
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_SUCCES': 
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        case 'ADD_BOOK_TO_CART': {
            const bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            const itemIndex = state.cartItems.findIndex((item) => item.id === bookId);
            let item = state.cartItems[itemIndex];

            let newItem;

            if (item) {
                newItem = {
                    ...item,
                    count: item.count + 1,
                    price: item.price + book.price
                }
            } else {
                newItem = {
                    id: book.id,
                    title: book.title,
                    count: 1,
                    price: book.price
                }
            }

            if (itemIndex < 0) {
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems,
                        newItem
                    ]
                }
            } else {
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems.slice(0, itemIndex),
                        newItem,
                        ...state.cartItems.slice(itemIndex + 1)
                    ]
                }
            }
        }
        case 'DECREASE_BOOK_FROM_CART': {
            const bookId = action.payload;
            const itemIndex = state.cartItems.findIndex((item) => item.id === bookId);
            const book = state.books.find((book) => book.id === bookId);
            let item = state.cartItems[itemIndex];

            let newItem;

            if (item.count > 1) {
                newItem = {
                    ...item,
                    count: item.count - 1,
                    price: item.price - book.price
                }
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems.slice(0, itemIndex),
                        newItem,
                        ...state.cartItems.slice(itemIndex + 1)
                    ]
                }
            } else {
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems.slice(0, itemIndex),
                        ...state.cartItems.slice(itemIndex + 1)
                    ]
                }
            }
        }
        case 'DELETE_BOOK_FROM_CART': {
            const bookId = action.payload;
            const itemIndex = state.cartItems.findIndex((item) => item.id === bookId);
            return {
                ...state,
                cartItems: [
                    ...state.cartItems.slice(0, itemIndex),
                    ...state.cartItems.slice(itemIndex + 1)
                ]
            }
        }
        default:
            return state;
    }
}

export default reducer;