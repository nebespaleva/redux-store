import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import {connect} from 'react-redux';
import {WithBookstoreService} from '../hoc';
import {fetchBooks, bookAddToCart} from '../../actions';
import ErrorIndicator from '../error-indicator';
import './book-list.css';

const BookList = ({books, onAddToCart}) => {
    return(
        <ul className='book-list'>
            {
                books.map((book) => {
                    return(
                        <li key={book.id}>
                            <BookListItem 
                                book={book}
                                onAddToCart={() => onAddToCart(book.id)}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error, onAddToCart} = this.props;

        if (loading) {
            return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>;
        }

        return <BookList 
            books={books}
            onAddToCart={onAddToCart}/>   
    }
}

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error }
};

const mapDispatchToProps = (dispatch, {bookstoreservice}) => {

    return {
        fetchBooks: fetchBooks(bookstoreservice, dispatch),
        onAddToCart: (id) => dispatch(bookAddToCart(id))
    }
}

export default WithBookstoreService()(connect(mapStateToProps,mapDispatchToProps)(BookListContainer));
