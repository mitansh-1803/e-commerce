import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../../API';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { getCartProduct } from '../../Store/actions';

import "./detailpage.css"


const DetailPage = (props) => {

    const {id} = useParams();
    const [item, setItem] = useState({});
    const [activeImage, setActiveImage] = useState(0);
    const [prewiewImage, setPrewiewImage] = useState("");
    const [loader, setLoader] = useState(true);
    
    useEffect(() =>
    axios(`${productsData}/${id}`).then(res => {
        setItem(res.data);
        setPrewiewImage(res.data.preview);
        setLoader(false);
    })
    .catch(err => console.log(err))
    ,[])


    return (<div>
        {loader ?<div id="loaderContainer"> <CircularProgress /> </div> :
        <div id="detail-section">
            <div>
                <img className="product-image" src={prewiewImage} alt={item.name} />
            </div>
            <div className="info-wrapper">
                <h1 className="title">{item.name}</h1>
                <h3 className="brand">{item.brand}</h3>
                <h3 className="price">
                    Price: Rs {item.price}
                </h3>
                <h3 className="description">Description</h3>
                <p>{item.description}</p>
                <h3 className="preview">Product Preview</h3>
                <div className="product-images" >
                    {item.photos?.map((item,index)=> <img id={index} className={index===activeImage?"active-image":""} src={item} alt="product-preview" onClick={() => {setActiveImage(index);setPrewiewImage(item)}} />)}
                </div>
                <button className="add-to-cart" onClick={() => props.addProductToCart(item)}>Add To Cart</button>
            </div>
        </div>}
    </div>);
}
 
const mapDispatchToProps = (dispatch) => ({
    addProductToCart: (data) => dispatch(getCartProduct(data))
})

export default connect(null,mapDispatchToProps)(DetailPage);