import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartProduct } from '../../Store/actions';

const ProductCard = (props) => {
    
    return (  <div className="card" key={props.item.id} >
        <Link to={`/detailpage/${props.item.id}`}>
            <img className="productImage" src={props.item.preview} alt={`${props.item.name}`}/>
        </Link>
        <div className="productInfo">
            <div>
                <h3 className="productName">{props.item.name}</h3>
                <h4 className="productBrand">{props.item.brand}</h4>
                <h5 className="productPrice">Rs. {props.item.price}</h5>
            </div>
            <button className="addToCart" onClick={() => {props.addProductToCart(props.item);}}>Add To Cart</button>
        </div>
    </div> );
}
 
const mapDispatchToProps = (dispatch) => ({
    addProductToCart: (data) => dispatch(getCartProduct(data))
})

export default connect(null,mapDispatchToProps)(ProductCard);
