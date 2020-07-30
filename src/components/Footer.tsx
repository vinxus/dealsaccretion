import  React from "react";
import { Link } from 'react-router-dom';

import './footer.css';
export class FooterComponent extends React.Component {
    constructor (public props: any) {
        super(props);

       // this.props = prop;
       this.state = {};
    }

    render() {
        return (
            
            <div className="_container">               
                <div className="footer">
                    <div className="policies footer_item">
                        <h6>Policies</h6>
                        <ul>
                            <li><Link to="policy">Privacy Policy</Link></li>
                            {/* <li>Terms and Conditions</li> */}
                            <li><Link to="cookie_policy">Cookie Policy</Link></li>
                        </ul>
                        <div className="footer_lastline">
                            <div className="social">
                                Social Media
                            </div>
                            {/* <div className="accreditations">
                                Accreditations
                            </div> */}
                            <div className="copyright" >
                                <hr/>
                                &#169;Deals Accretion 2020. All Rights Reserved.
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        );
    }
}

export default FooterComponent;