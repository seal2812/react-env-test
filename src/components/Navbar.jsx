import {Nav, Navbar, Container, NavDropdown} from "react-bootstrap";  
import {SignOutButton} from "./SignOutButton"  
import {useMsal} from "@azure/msal-react"; 
import "../styles/navbar.css";

export const NavbarComponent = () => { 
    const { accounts } = useMsal(); 
    const name = accounts[0] && accounts[0].name; 
 
    return ( 
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Brand href="#home"> 
                <img alt="dsb logo" src="https://upload.wikimedia.org/wikipedia/en/8/87/DSB_company_logo.svg" />
                </Navbar.Brand> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">        
                        <Nav.Link href="/">Graffitidetection: ReportingTool</Nav.Link>    
                    </Nav>
                    <Nav>      
                        {/* <Nav.Link href="/litra-overview">Litra Overview</Nav.Link>     */}
                        <Nav.Link href="/sap-report">Manual reporting</Nav.Link>    
                        <Nav.Link href="/feedback-report">Improve Model</Nav.Link>    
                            <NavDropdown  title={name} id="collasible-nav-dropdown"> 
                                <SignOutButton/>
                            </NavDropdown> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>   
    );
}