import  React from "react";
// import React.Dom from 'react.dom';
import { Link } from "react-router-dom";
class HealthComponent extends React.Component {
    constructor (public props: any) {
        super(props);

       // this.props = prop;
       this.state = {};
    }

    render() {
        return (
            <div>
                <div className="_container"><h5>Health Sector</h5></div>
                <div className="health_sector">
                    <img src="/images/healthcare.jpeg" alt="Health Care" />
                </div>
                <br />
                <p>
                    We will like to hear from Care Homes and Domiciliary Care Agencies. <Link to="/contactus">Contact us</Link>
                </p>
            </div>
            
        );
    }
}

export default HealthComponent;