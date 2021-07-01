import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart, removeProduct } from '../../Store/actions';


import "./checkout.css";

const Checkout = (props) => {

    return ( <div id="checkout-section">
        <h1 id="heading">Checkout</h1>
        <div id="cart-detail">
            <div id="cart-item-wrapper">
                <p>Total Items: {props.product?.reduce((acc,item) => acc + item.quantity, 0)}</p>
                {props.product?.map((item) => 
                <div className="cart-item">
                    <img src={item.preview} alt={item.name} />
                    <div className="detail">
                        <h3>{item.name}</h3>
                        <p>x {item.quantity}</p>
                        <p>Amount: Rs {item.price}</p>
                        <button className="remove-btn" onClick={() => {props.removeItem(item.id); console.log(item.id)}}>Remove</button> 
                    </div>
                </div>)}
            </div>
            <div id="product-total">
                <div id="price-detail">
                    <h2>Total Amount</h2>
                    <p>Total Amount: Rs <span id="total-amount">{props.product?.reduce((acc,item) => acc + (item.quantity * item.price) , 0)}</span> </p>
                    <Link to="/confirm"><button id="place-order-btn" onClick={()=> props.confirmOrder()} >Place Order</button></Link>
                </div>
            </div>
        </div>
        
    </div> );
}

const mapStateToProps = (store) => ({
    product: store.cartProduct
})

const mapDispatchToProps = (dispatch) =>({
    confirmOrder: () => dispatch(clearCart()),
    removeItem : (data) => dispatch(removeProduct(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);