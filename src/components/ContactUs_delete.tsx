import React from "react";

import axios from "axios";

export default class ContactUs extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { feedback: '', name: 'name',  email: '', errors: {}, sector: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  
  render() {
    let title = "Contact Us";
    // let {register, handleSubmit, watch, errors } = useForm(); 
    let text = <ul>          
        <li>Please fill the form below to contact us</li>          
    </ul>
    let form = <div className="contact_form">
    <form className='contactus_form'>                            
                <div>                  
                {/* <input type="text" name="name" value={setValue(value)} onChange="this.handleChange"/> */}
                <input type="text" name="name" required  pattern="/^[A-Za-z]+$/i" placeholder="Name" />                
                {/* {this.state.errors.name && <span className="error">This field is required</span>} */}
                </div>
                <div>
                <span>&nbsp; Sector:</span>
                <select name="sector">
                    <option  value="construction">Construction</option>
                    <option  value="health">Health Care</option>
                    <option  value="retail">Retail</option>
                    <option  value="security">Security</option>                                        
                </select>
                </div>
                <div>
                <input type="text" name="email" required placeholder="Email"/>
                {/* {this.state.errors.email && <span className="error">This field is required</span>} */}
                </div>
                
                <div>&nbsp;
                <textarea name="message" required placeholder="Type message here ..."/>
                {/* { this.errors.name && <span className="error">This field is required</span>} */}
                </div>                
                
            <input type="submit" value="Submit" />
            </form> 
            </div>
    return (
        <div>
          <h5>{title}</h5>
          {text}      
          {form}           
        </div>
      );

    }            
    handleSubmit(event:any) {
      
    }
    handleChange() {

    }
  }
  