import  React from "react";
// import React.Dom from 'react.dom';
import "Services.css";

class ServicesComponent extends React.Component {
    constructor (public props: any) {
        super(props);

       // this.props = prop;
       this.state = {};
    }

    render() {
        return (
            <div className="services_view">
               <div className="split_view">
                    <h5>Services</h5>
                    <ul>
                        <li>Health and Social Care</li>
                        <li>Security</li>
                        <li>Logistics</li>
                    </ul>                            
               </div> 
               <div className="split_view">
                   <img src="/images/20200712_132951.jpg" alt="service holder" className="service_image"/>
               </div>
            </div>
            
            
        );
    }
}

export default ServicesComponent;