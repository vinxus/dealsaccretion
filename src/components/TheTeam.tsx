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
                <div className="profile_card">
                    <div className="page_text profile_text">
                        <span className="profile_name">Tajudeen Adekanmbi</span><br/>
                        <span className="profile_job_title">CEO Deals Accretion</span>
                        <p>
                        I have over 20 years experience managing businesses of different sizes.<br/>
                        I have over 20 years experience managing businesses of different sizes.<br/>
                        I have over 20 years experience managing businesses of different sizes.<br/>
                        I have over 20 years experience managing businesses of different sizes.<br/>
                        </p>
                    </div>
                    <div className="page_image profile_picture">
                        <img src="/images/ceoprofile.jpeg" alt="Chief Executive Officer" width="160px" height="200px"/>
                    </div>
                </div>
                
                <div className="profile_card">
                    <div className="page_text profile_text">
                    <span className="profile_name">Rashidat Adekunle-Mohammed</span><br/>                    
                    <span className="profile_job_title">Executive Director Deals Accretion</span>
                    <p>
                        I have worked in Care and other businesses. <br/>
                        knsdlflk lkflsfls lskdjfsd lasjdflj l; kljdlfj kljdfj lsdldlfl taisd mnaj<br/>
                        knsdlflk lkflsfls lskdjfsd lasjdflj l; kljdlfj kljdfj lsdldlfl taisd mnaj<br/>
                    </p>
                    </div>
                    <div className="page_image profile_picture">
                        <img src="/images/mgtprofile.jpeg" alt="Executive Director" width="160px" height="200px"/>
                    </div>
                </div>                    
                
                
            
            </div>
            
        );
    }
}

export default TheTeamComponent; 