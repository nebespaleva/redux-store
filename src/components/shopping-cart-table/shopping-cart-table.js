import React from 'react';
import {connect} from 'react-redux';
import {bookAddToCart, bookDecreaseFromCart, bookDeleteFromCart} from '../../actions';
import './shopping-cart-table.css';

const ShoppingCartTable = ({items, total, onAddToCart, onDeleteFromCart, onDecreaseFromCart}) => {

    const ShoppingCartItem = ({title, count, price, id}, idx) => {

        return(
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${price}</td>
                <td>
                    <button
                        onClick={() => onDeleteFromCart(id)} 
                        className="btn btn-outline-danger btn-sm float-right">
                        <i className="fa fa-trash-o" />
                    </button>
                    <button
                        onClick={() => onAddToCart(id)}
                        className="btn btn-outline-success btn-sm float-right">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        onClick={() => onDecreaseFromCart(id)} 
                        className="btn btn-outline-warning btn-sm float-right">
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
            </tr>
        )
    };

    return(
        <div className='shopping-cart-table'>
            <h2>Your order</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(ShoppingCartItem)
                    }
                </tbody>
            </table>

            <div className='total'>
                Total: ${total}
            </div>
        </div>
    )
}

const mapStateToProps = ({cartItems, totalOrder}) => {
    return {
        items: cartItems,
        total: totalOrder
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (id) => dispatch(bookAddToCart(id)),
        onDecreaseFromCart: (id) => dispatch(bookDecreaseFromCart(id)),
        onDeleteFromCart: (id) => dispatch(bookDeleteFromCart(id))
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);