import React from 'react';
import confirmImage from "../../images/img_confirm.png";
import "./confirmPage.css";

const ConfirmPage = () => {
    return ( <div id="confirm-section">
        <img src={confirmImage} alt="confirm-order-image" />
        <h3>Order Placed Successfully!!</h3>
        <p>We have sent you an email with the order details</p>
    </div> );
}
 
export default ConfirmPage;
