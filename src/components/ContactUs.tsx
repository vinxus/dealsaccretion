import React from "react";

import axios from "axios";
import "contactus.css";

export default class ContactUs extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = { feedback: '', name: '',  email: '', errors: {}, sector: 'health', message: ''};
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
    <form className='contactus_form' onSubmit={this.handleSubmit}>                            
                <div>                  
                {/* <input type="text" name="name" value={setValue(value)} onChange="this.handleChange"/> */}
                <input type="text" name="name" required  placeholder="Name" onChange={this.handleChange} value={this.state.name}/>                
                {/* {this.state.errors.name && <span className="error">This field is required</span>} */}
                </div>
                <div>
                <span>&nbsp; Sector:</span>
                <select name="sector" onChange={this.handleChange} value={this.state.sector}>
                    <option  value="construction">Construction</option>
                    <option  value="health"> Health Care</option>
                    <option  value="retail">Retail</option>
                    <option  value="security">Security</option>                                        
                </select>
                </div>
                <div>
                <input type="text" name="email" required placeholder="Email" onChange={this.handleChange} value={this.state.email}/>
                {/* {this.state.errors.email && <span className="error">This field is required</span>} */}
                </div>
                
                <div>&nbsp;
                <textarea name="message" required placeholder="Type message here ..." onChange={this.handleChange} className="contact_textarea" value={this.state.message}/>
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
      event.preventDefault();
      const templateId = 'template_id';
      // const messageHtml = renderEmail(<MyEmail name={this.state.name}>{this.state.feedback}</MyEmail>)
      const messageHtml = this.renderEmail()
      
      this.sendMessage(templateId, { message: messageHtml, from_name: this.state.name, reply_to: this.state.email,
         sector: this.state.sector})
      
    }
    handleChange(event:any) {
      console.log(event.target.name);
      this.setState({[event.target.name]: event.target.value});
      console.log(this.state[event.target.name]);
      
      
    }

    sendMessage (templateId:any, variables:any) {      

      axios({
        method: 'POST',
        url: "http://localhost:5000/send",
        data: {
          name: variables.from_name,
          email: variables.reply_to,
          message: variables.message,
          sector: variables.sector,

        }
      }).then((response)=>{
        if(response.data.msg === 'success'){
          alert('Email sent, awesome!');
          this.resetForm()
        }else if(response.data.msg === 'fail'){
          alert('Oops, something went wrong. Try again')
        }
      });

      console.log(variables);
    }

    resetForm(){
      this.setState({feedback: ''});
    }
    renderEmail() {
      return "Message from: " + this.state.name + "<br/> Email: " + this.state.email + "<br/>Sector: " + this.state.sector + "<br/>" + this.state.message;
    }
  }
  