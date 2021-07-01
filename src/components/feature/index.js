import React from 'react';
import "./feature.css";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";

const Features = () => {
    return ( <div id="features-wrapper">
        <div className="feature">
            <div className="image-wrapper">
                <img src={icon1} alt="free-delivery-icon"/>
            </div>
            <h4>Free Delivery</h4>
        </div>
        <div className="feature">
            <div className="image-wrapper">
                <img src={icon2} alt="money-back-guarantee-icon"/>
            </div>
            <h4>Money Back Gurantee</h4>
        </div>
        <div className="feature">
            <div className="image-wrapper">
                <img src={icon3} alt="always-support-icon"/>
            </div>
            <h4>Always Support</h4>
        </div>
        <div className="feature">
            <div className="image-wrapper">
                <img src={icon4} alt="secure-ayment-icon"/>
            </div>
            <h4>Secure Payment</h4>
        </div>
    </div> );
}
 
export default Features;