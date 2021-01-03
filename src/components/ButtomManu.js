
import { Nav ,NavDropdown } from "react-bootstrap";


export default function ButtomManu(){
    return (
        <Nav variant="pills" activeKey="1" >
      <NavDropdown title="OnBoarding 1" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">OnBoarding 1</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">OnBoarding 2</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">OnBoarding 3</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );

  };