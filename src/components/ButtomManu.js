
import { Navbar ,NavDropdown } from "react-bootstrap";
import '../css/ButtomMenu.css';


export default function ButtomManu(){
    return (
        <Navbar  activeKey="1" expand="lg" fixed="bottom" >
          <div >
          <NavDropdown title={<span className="text-primary my-auto">OnBoarding 1</span>} id="nav-dropdown" >
            <li>
            <NavDropdown.Item className="BottomText" eventKey="4.1" >OnBoarding 1</NavDropdown.Item>
            </li>
            <li>
            <NavDropdown.Item className="BottomText" eventKey="4.2">OnBoarding 2</NavDropdown.Item>
            </li>
            <li>
            <NavDropdown.Item className="BottomText" eventKey="4.3">OnBoarding 3</NavDropdown.Item>
            </li>
          </NavDropdown>
          </div>
        </Navbar>
  );
};