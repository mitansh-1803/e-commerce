import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//icons
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

//css
import "./topbar.css";
import { connect } from 'react-redux';

const TopBar = (props) => {
    const [showSideBar, setShowSideBar] = useState(false);

    return (<div id="topbar">
        <Link to="/" id="logo"><span>shop</span>lane</Link>
        <div id="nav-wrapper">
            <Link to="/" className="nav-link" href="#">Home</Link>
            <a className="nav-link" href="#clothing-section">Clothing</a>
            <a className="nav-link" href="#accessory-section">Accessories</a>
        </div>
        <div id="icon-wrapper">
            <SearchIcon />
            <Link to="/checkout" id="cart"><ShoppingCartIcon /><span>{props.product}</span></Link>
            <AccountCircleIcon />
            <div className="burger-toggle" onClick={()=>setShowSideBar(!showSideBar)}>
                <div className={showSideBar?"line1":""}></div>
                <div className={showSideBar?"line2":""}></div>
                <div className={showSideBar?"line3":""}></div>
            </div>
        </div>
        {showSideBar && <div id="nav-links">
            <Link to="/" className="nav-link" href="#">Home</Link>
            <a className="nav-link" href="#clothing-section">Clothing</a>
            <a className="nav-link" href="#accessory-section">Accessories</a>
        </div>}
    </div>);
}
 
const mapStateToProps = (store) => ({
    product: store.cartProduct?.reduce((acc,item) => acc + item.quantity, 0)
})

export default connect(mapStateToProps,null)(TopBar);