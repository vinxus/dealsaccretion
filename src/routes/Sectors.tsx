import  React from "react";
import { Link } from "react-router-dom";
// import React.Dom from 'react.dom';

class SectorsComponent extends React.Component {
    constructor (public props: any) {
        super(props);

       // this.props = prop;
       this.state = {};
    }

    render() {
        return (
            <div>
                <h5>Sectors</h5>
            
                <p>Sectors we work in</p>
                <ul>
                    <li><Link to="health">Health Social Care</Link></li>
                    <li><Link to="security">Security</Link></li>
                    <li><Link to="retail">Retail</Link></li>
                    <li><Link to="/construction">Construction</Link></li>
                </ul>
                
            
            </div>
            
        );
    }
}

export default SectorsComponent; 