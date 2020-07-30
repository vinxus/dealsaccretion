import React, { useState, useEffect  } from "react";
import { useForm } from "react-hook-form";

import axios from "axios";

export default function ContactUsBKUP(props: any) {
    // get the route information from the backend and render the view
    console.log(props.routename)
    const [value, setValue] = useState("");
    const {register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data:any) => console.log(data);  
    useEffect(() => {  
      // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
      var callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
      };

    });
    
    console.log(value)
    
    let title = "Contact Us";
    
    let text = <ul>          
        <li>Please fill the form below to contact us</li>          
    </ul>
    let form = <div className="contact_form">
    <form onSubmit={handleSubmit(onSubmit)}>                            
                <div>                  
                {/* <input type="text" name="name" value={setValue(value)} onChange="this.handleChange"/> */}
                <input type="text" name="name" ref={register({required: true,  pattern: /^[A-Za-z]+$/i})} placeholder="Name" />                
                {errors.name && <span className="error">This field is required</span>}
                </div>
                <div>
                Sector:
                <select name="sector" ref={register}>
                    <option  value="construction">Construction</option>
                    <option  value="health">Health Care</option>
                    <option  value="retail">Retail</option>
                    <option  value="security">Security</option>                                        
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
    return (
      <div>
        <h5>{title}</h5>
        {text}      
        {form}           
      </div>
    );
  }
  function handleSubmit(event:any) {
    
  }