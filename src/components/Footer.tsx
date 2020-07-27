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
               <hr/> 
                <div className="footer">
                    <div className="policies footer_item">
                        <h6>Policies</h6>
                        <ul>
                            <li><Link to="policy">Privacy Policy</Link></li>
                            <li>Terms and Conditions</li>
                            <li>Cookie Policy</li>
                        </ul>
                        <div>
                            <div className="social footer_item">
                                Social Media
                            </div>
                            <div className="accreditations footer_item">
                                Accreditations
                            </div>
                            <div className="copyright footer_item" >
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