import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function RouteManager(props: any) {
    // get the route information from the backend and render the view
    console.log(props.routename)
    let title = "";
    let text = <ul>
          <li>Contact details here</li>
          <li>Who we serve? People.</li>
          <li>How do we serve them - With passion.</li>
        </ul>;
    let form;
    const [value, setValue] = useState("");
    const {register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data:any) => console.log(data);
    console.log(value)
    if(props.routename === "contactus") {
      title = "Contact Us";
      
      text = <ul>          
          <li>Please fill the form below to contact us</li>          
        </ul>
      form = <div className="contact_form">
        <form onSubmit={handleSubmit(onSubmit)}>                            
                  <div>                  
                  {/* <input type="text" name="name" value={setValue(value)} onChange="this.handleChange"/> */}
                  <input type="text" name="name" ref={register({required: true,  pattern: /^[A-Za-z]+$/i})} placeholder="Name" />                
                  {errors.name && <span className="error">This field is required</span>}
                  </div>
                  <div>
                    Sector:
                    <select name="sector" ref={register}>
                      <option  value="health">
                        Health
                      </option>
                      <option  value="security">
                        Security
                      </option>
                      <option  value="retail">
                        Retail
                      </option>
                    </select>
                  </div>
                  <div>
                    <input type="text" name="email" ref={register({required: true})} placeholder="Email"/>
                    {errors.name && <span className="error">This field is required</span>}
                  </div>
                  
                  <div>
                    <textarea name="message" ref={register({required: true})} placeholder="Type message here ..."/>
                    {errors.name && <span className="error">This field is required</span>}
                  </div>                
                  
                <input type="submit" value="Submit" />
             </form> 
             </div>
    }
    if(props.routename === "retail") {
      title = "Retail";
      text =<div className="retail_info"> <ul>
          <li></li>
          <li>We are interested in talking to retail businesss owners looking to sell.</li>
          <li>Contact us at <a href="mailto:info@dealsaccretion.com">info@dealsaccretion.com</a></li>
        </ul></div>
    }
    return (
      <div>
        <h4>{title}</h4>
        {text}      
        {form}           
      </div>
    );
  }