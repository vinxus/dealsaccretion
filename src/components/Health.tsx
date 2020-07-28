import  React from "react";
// import React.Dom from 'react.dom';

class HealthComponent extends React.Component {
    constructor (public props: any) {
        super(props);

       // this.props = prop;
       this.state = {};
    }

    render() {
        return (
            <div>
                <div className="_container"><h5>Health Sectors</h5></div>
                <div className="health_sector">
                    <img src="/images/healthcare.jpeg" alt="Health Care" />
                </div>
            </div>
            
        );
    }
}

export default HealthComponent;