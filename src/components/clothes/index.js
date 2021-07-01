import React from 'react';
import { connect } from 'react-redux';
import ProductCard from '../card';

const Clothing = (props) => {
    return ( <div className="products-section" id="clothing-section">
        <h1>Clothing for Men and Women</h1>
        <div className="products">
            {props.clothing?.map((item)=> <ProductCard item={item} />)}
        </div>
    </div> );
}
 
const mapStateToProps = (store) =>({
    clothing: store.clothingProduct
})

export default connect(mapStateToProps,null)(Clothing);
