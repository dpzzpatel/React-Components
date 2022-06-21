import { Navbar,Nav,NavDropdown,Button, Container,Offcanvas } from "react-bootstrap";
import {Image} from "react-bootstrap";
import logo from "./images/logo.svg";
import herodesktop from "./images/image-hero-desktop.png";
import heromobile from "./images/image-hero-mobile.png";
import './styles.css';
import {useEffect, useState} from 'react';
import clientaudiophile from './images/client-audiophile.svg';
import clientdatabiz from './images/client-databiz.svg';
import clientmaker from './images/client-maker.svg';
import clientmeet from './images/client-meet.svg';
import iconplanning from './images/icon-planning.svg';
import iconcalendar from './images/icon-calendar.svg';
import iconreminders from './images/icon-reminders.svg';
import icontodo from './images/icon-todo.svg';

function IntroSectionWithDropdownNavigation(){
    const [windowSize, setWindowSize] = useState(getWindowSize());
    useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
    return(
    <>
    <Navbar className="px-sm-5 px-1 mt-2" id="NavbarId" collapseOnSelect expand="lg">
        <Navbar.Brand  as={Image} href="#home"
              src={logo}
              alt=""
            />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Offcanvas
              id="responsive-navbar-nav"
              aria-labelledby="offcanvasNavbarLabel-expand"
              placement="end"
            >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand">
              </Offcanvas.Title>
            </Offcanvas.Header> 
         {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
            <Offcanvas.Body style={{color:"hsl(0, 0%, 41%)"}}>  
              <Nav className="ms-5 gap-4">
                <NavDropdown title="Features" id="collasible-nav-dropdown">
                  <NavDropdown.Item ><Image src={icontodo} alt=""/> &nbsp; Todo List</NavDropdown.Item>
                  <NavDropdown.Item ><Image src={iconcalendar} alt=""/> &nbsp;Calendar</NavDropdown.Item>
                  <NavDropdown.Item ><Image src={iconreminders} alt=""/> &nbsp;Reminders</NavDropdown.Item>
                  <NavDropdown.Item><Image src={iconplanning} alt=""/> &nbsp;Planning</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Company" id="collasible-nav-dropdown">
                  <NavDropdown.Item >History</NavDropdown.Item>
                  <NavDropdown.Item >Our Team</NavDropdown.Item>
                  <NavDropdown.Item >Blog</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#pricing">Careers</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
              </Nav>
              <Nav className="ms-auto gap-4">
                <Nav.Link href="#deets">Login</Nav.Link>
                <Button className="rounded-pill" type="submit" size="md" value="Submit" variant="outline-secondary">Register</Button>
              </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        {/* </Navbar.Collapse> */}
    </Navbar>
    <Container>
      <div className="d-flex flex-column flex-md-row-reverse mt-2 mt-md-5 gap-5 overflow-x">
        <div className="d-flex col-md-5 justify-content-center">
          <picture>
            <source media="(min-width: 768px)" srcset={herodesktop} />
            <source media="(max-width: 767px)" srcset={heromobile} />
            <img src={herodesktop} className="img-fluid" style={windowSize.innerWidth>768?{maxHeight:"65vh"}:{maxHeight:"35vh",minWidth:"200px"}} alt=""/>
          </picture>
        </div>
        <div className="d-flex flex-column justify-content-end align-items-center align-items-md-start gap-4">
          <h1>Make Remote Work</h1>
          <p style={windowSize.innerWidth>768?{color:"hsl(0, 0%, 41%)"}:{color:"hsl(0, 0%, 41%)",fontSize:"12px"}}>Get your team in sync, no matter your location. Streamline processes, 
              create team rituals, and watch productivity soar.</p>
          <div className="col-md-6 mb-2"><Button variant="dark" size={windowSize.innerWidth>768?"lg":"md"} style={{borderRadius:'10px'}}>Learn More</Button></div>
          <div className={windowSize.innerWidth>768? "d-flex col-12 justify-content-between mt-5":"d-flex col-12 justify-content-between mt-2 mx-1"}>
            <div className="col-2">
              <img src={clientdatabiz} className="img-fluid" alt="" />
            </div>
            <div className="col-2">
            <img src={clientaudiophile} className="img-fluid" alt="" />
            </div>
            <div className="col-2">
              <img src={clientmeet} className="img-fluid" alt="" />
            </div>
            <div className="col-2">
            <img src={clientmaker} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>  
    </>
    )
}

export default IntroSectionWithDropdownNavigation;