import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { connect } from 'react-redux';
import { getAccessoryProduct, getClothingProduct, getProducts } from '../../Store/actions';
import CircularProgress from '@material-ui/core/CircularProgress';

//API
import { productsData } from '../../API';
//components
import Accessories from '../accessories';
import Clothing from '../clothes';

//css
import "./products.css"

const Products = (props) => {
    
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        axios(productsData).then(res=>{
            props.getProduct(res.data);
            const clothes = res.data.filter((item)=>item.isAccessory === false);
            props.getClothes(clothes)
            const accessory = res.data.filter((item)=>item.isAccessory === true);
            props.getAccessories(accessory)
            setLoader(false)
        })
    }, [])
    return ( 
    loader ?<div id="loaderContainer"> <CircularProgress /> </div> :<div id="product-container">
        {props.clothing.length ? <Clothing />:""}
        {props.accessory.length ? <Accessories />:""}
    </div> );
}

const mapStateToProps = (store) => ({
    clothing: store.clothingProduct,
    accessory: store.accessoriesProduct
})

const mapDispatchToProps = (dispatch) => ({
    getProduct: (data)=> dispatch(getProducts(data)),
    getClothes: (data)=> dispatch(getClothingProduct(data)),
    getAccessories: (data)=> dispatch(getAccessoryProduct(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Products);
