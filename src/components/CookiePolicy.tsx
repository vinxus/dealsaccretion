import  React from "react";
// import React.Dom from 'react.dom';

class CookiePolicyComponent extends React.Component {
    constructor (public props: any) {
        super(props);

       // this.props = prop;
       this.state = {};
    }

    render() {
        return (
            <div className="cookie_policy">
                <p>
                TODO: Add GDPR compliant cookie policy here:    <br/>
                This site uses cookies to store information on your computer. Some of these cookies are essential to make <br/>
                the site work and others help us to improve services by giving us some insight into how the site is used. <br/>
                You can view our cookies policy here.</p>
            </div>
            
        );
    }
}

export default CookiePolicyComponent;