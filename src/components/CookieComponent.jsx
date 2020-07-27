import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ReactHtmlPasrser from 'react-html-parser';
export class Cookie extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            message: "<p>This site uses cookies to store information on your computer. Some of these cookies are essential to make the site work and others help us to improve services by giving us some insight into how the site is used. You can view our cookies policy here.</p>",
            cookieStatus: props.cookieStatus,
            show: true,
            SettingsText: "Settings"
        };
        this.title = "GDPR Cookie Notice";   
        this.handleClose = () => this.setShow(false);
        this.handleShow = () => this.setShow(true);          
    }

    render() {
    console.log(this.title);
    return (
        <Modal  show={this.state.show} cookieupdate={this.state.cookieStatus + ""}
            onHide={this.handleClose}
            size="lg"
            aria-labelledby="contained-modeal-title-vcenter" centered>
            <div className="cookie-view">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {this.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Accordion>
                    <Card>
                        <Card.Body>
                            { !this.state.cookieStatus && ReactHtmlPasrser(this.state.message)}
                        </Card.Body>
                        
                    </Card>
                    <Card>                      
                        <Accordion.Collapse eventKey="1">
                            <Card>
                                <Card.Header> 
                                GDPR Settings - How we use   
                            </Card.Header>
                             <Card.Body>
                                <Card>
                                    Analytics
                                </Card>
                                <Card>
                                    Marketing
                                </Card>
                                <Card>
                                    Support
                                </Card>
                                <Card>
                                    Required. Find out more ...
                                </Card>
                        
                            </Card.Body> 
                            </Card>
                            
                        </Accordion.Collapse>
                        <Accordion.Toggle  eventKey="1" 
                        variant="secondary" onClick={this.handleCookieSetting}>                    
                            {this.state.SettingsText}
                        </Accordion.Toggle>
                    </Card>
                    
                </Accordion>
                
            </Modal.Body>
            <Modal.Footer>
                {
                !this.state.cookieStatus && <Button id="accept" className="_accept btn-secondary" 
                ref={(button)=>this.acceptCookie = button} 
                variant="secondary"
                onClick={this.doCookieUpdate.bind(this)}>
                    Accept
                </Button>}
                {
                    !this.state.cookieStatus &&
                    <Button id="reject" className="_reject btn-primary" 
                    variant="primary"
                    onClick={this.doCookieUpdate.bind(this)}
                    ref={(button)=>this.rejectCookie = button}>
                        Reject
                    </Button>
                }
                
            </Modal.Footer>
            </div>
        </Modal>
         
        )
    }
    doCookieUpdate(event) {
        event.preventDefault();   
        console.log(event);
        this.setState({cookieStatus: true});
        if(event.target.id === 'accept' ) {
            this.props.onCookieUpdate(true);
        } else {
            this.props.onCookieUpdate(false);
        }
        this.setShow(false);
    }
    setShow(status) {
        this.setState({show: status}) 
    }

    handleCookieSetting = () => {
        console.log('Setting called');
        if(this.state.SettingsText==='Settings') {
            this.setState({SettingsText: 'Hide settings'});
        } else {
            this.setState({SettingsText: 'Settings'});
        }
        
    }
}
// const handleClose = () => setShow(false);
// const hanleShow = () => setShow(true);

export default Cookie;