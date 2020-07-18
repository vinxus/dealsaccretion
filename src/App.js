import React from "react";
import Sectors from "./routes/Sectors";
import Services from "./routes/Services";
import Footer from "./components/Footer";
import RouteManager from "./components/RouteManager";
import Policy from "./components/Policy";
// import jquery from 'jquery';
// import BootStrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Accordion, Button, Card }  from 'react-bootstrap';

import Home from "./components/Home";
import ContactUs from "components/ContactUs";
import Construction from "components/Construction";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <div className="container">
        <Router>
          <div>
            <ul>
              <li  className="topmenu">
                <Link to="/"><img src="/images/dalogo2.jpeg" alt="DA Logo" width="30px" height="30px"/></Link>
              </li>
              <li className="topmenu subitems">
                <a href="/aboutus">About Us </a>
                <ul className="submenu">
                  <li><Link to="/mission">Our Mission</Link></li>
                  <li><Link to="/vision">Our Vision</Link></li>
                  <li><Link to="/contactus">Contact Us</Link></li>
                </ul>
                {/* <Link to="/about">About</Link> */}
              </li>
              <li  className="topmenu">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li  className="topmenu subitems">
               <a href="/sectors">Sectors</a>
                <ul className="submenu">
                  <li><Link to="/health">Health</Link></li>
                  <li><Link to="/security">Security</Link></li>
                  <li><Link to="/retail">Retail</Link></li>
                  <li><Link to="/construction">Construction</Link></li>
                </ul>
              </li>
              <li  className="topmenu">
                <Link to="/services">Services</Link>
              </li>
            </ul>

            <hr />

            {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/aboutus">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/vision">
                <Vision />
              </Route>
              <Route path="/mission">
                <Mission />
              </Route>
              <Route path="/sectors">
                <Sectors />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/health">
                <Vision />
              </Route>
              <Route path="/security">
                <Vision />
              </Route>
              <Route path="/retail">
              <RouteManager routename='retail' />
              </Route>
              <Route path="/contactus">
                <ContactUs routename='contactus' />
              </Route>
              <Route path="/construction">
                <Construction routename="construction" />
              </Route>
              <Route path="/policy">
                <Policy routename="policy" />
              </Route>
            </Switch>

          </div>
          <div>
          <Footer/>
        </div>
        </Router>
    </div>
   
  );
}

// You can think of these components as "pages"
// in your app.
function About() {
  return (
    <div>
      <h5>About Us</h5>
      <p>
      
      Deals Accretion was set up to provide quality service to customers and treat our employees<br/>
      well at the same time in the service sectors. Our goal is to own and operate an aggregation of <br/>
      businesses in these sectors so we can lead by example. In our mind the service sector is full of <br/>
      operators who don’t really care about people as they only ever think about the bottom line. For us<br/>
      the happiness and satisfaction of the people we serve and work with are the bottom line.
      </p>
      <p>
        <ul>
          <li><Link to="/mission">Our Mission</Link></li>
          <li><Link to="/vision">Our Vision</Link></li>
        </ul>
      </p>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
function Vision() {
  return (
    <div>
      <h4>Vision</h4>
      Building the vision around
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
            1. What are our hopes and dreams?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>We hope to provide the best services that people will be happy to use.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
            2. What problems are we solving for the greater good?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              We are trying to create qualitative experiences for service users and workers and a sustainable way.<br/>
              We are in business no make money that can be plowed back into the businesses and communities we serve.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
            3. Who and what are we inspiring to change?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              We are trying to change the ethics of business. We are believe businesses should be created not only <br/>
              to enrich the investors/creators but to serve the communities which they operate in a sustainable way.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>

  );
}
function Mission() {
  return (
    <div>
      <h5>Our Mission</h5>
      <ul>
        <li>What we do? - Care.</li>
        <li>Who we serve? - People.</li>
        <li>How do we serve them? - With passion.</li>
      </ul>
      <br/>
      <div>
        <p>
          Our mission is to provide qualitative and personalised service to all who encounter our business activities.<br/>
          We serve the people – customers, clients, service users with passion irrespective of the sector of the economy. <br />
          We know people are important and without a doubt we want them to feel appreciated as without them we have no business.
        </p>
        <p>Check out the different <Link to="/sectors">sectors</Link> we are in right now.</p>
      </div>
      
    </div>
  );
}

