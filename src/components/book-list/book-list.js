import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import {WithBookstoreService} from '../hoc';
import booksLoaded from '../../actions'
import './book-list.css';


class BookList extends Component {

    componentDidMount() {
        const {bookstoreservice} = this.props;
        const data = bookstoreservice.getBooks();
        
        this.props.booksLoaded(data);
    }

    render() {
        const {books} = this.props;
        return(
            <ul>
                {
                    books.map((book) => {
                        return(
                            <li key={book.id}>
                                <BookListItem book={book}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({books}) => {
    return { books }
};

const mapDispatchToProps = {
    booksLoaded
}

export default WithBookstoreService()(connect(mapStateToProps,mapDispatchToProps)(BookList));
