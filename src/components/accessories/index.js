import React from 'react';
import { connect } from 'react-redux';
import ProductCard from '../card';

const Accessories = (props) => {
    return ( <div className="products-section" id="accessory-section">
        <h1>Accessories for Men and Women</h1>
        <div className="products">
            {props.accessories?.map((item)=> <ProductCard item={item} />)}
        </div>
    </div> );
}

const mapStateToProps = (store) =>({
    accessories: store.accessoriesProduct
})

export default connect(mapStateToProps,null)(Accessories);
