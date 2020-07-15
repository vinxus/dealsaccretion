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
                <div className="_container"><h4>Sectors</h4></div>
            <div className="footer">
                <p>Sectors we work in
                    <ul>
                        <li>Health and Social Care</li>
                        <li>Security</li>
                    </ul>
                </p>
            </div>
            </div>
            
        );
    }
}

export default HealthComponent;