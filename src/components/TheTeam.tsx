import  React from "react";
import { Link } from "react-router-dom";
// import React.Dom from 'react.dom';

class TheTeamComponent extends React.Component {
    constructor (public props: any) {
        super(props);

       // this.props = prop;
       this.state = {};
    }

    render() {
        return (
            <div>
                <h5>The Team</h5>
                <div className="page_text profile_text">
                    Tajudeen Adekanmbi
                    CEO Deals Accretion
                </div>
                <div className="page_image profile_picture">
                    <img src="/images/ceoprofile.jpeg" alt="Chief Executive Officer" width="190px" height="240px"/>
                </div>
                <div className="page_text profile_text">
                Rashidat Adekunle-Mohammed                    
                Executive Director Deals Accretion
                </div>
                <div className="page_image profile_picture">
                    <img src="/images/mgtprofile.jpeg" alt="Executive Director" width="190px" height="240px"/>
                </div>
                <ul>
                    <li><Link to="health">Health and Social Care</Link></li>
                    <li><Link to="security">Security</Link></li>
                    <li><Link to="retail">Retail</Link></li>
                    <li><Link to="/construction">Construction</Link></li>
                </ul>
                
            
            </div>
            
        );
    }
}

export default TheTeamComponent; 