
import { Nav ,Navbar,Button } from "react-bootstrap";
import { ImHome } from  "react-icons/im";
import { GoPlusSmall } from "react-icons/go";
import { VscAccount} from  "react-icons/vsc";


export default function TopBar({user}){
    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="">
              <ImHome/>
          </Navbar.Brand>
        <Navbar.Brand href="#home">GuideFlow</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Navbar.Brand>
            <Button variant="success">
            <GoPlusSmall />
            Create new Project</Button>{' '}
          </Navbar.Brand>
          <Button variant="link">Dowenload chrome extention</Button>
          <Navbar.Brand className="justify-content-center"> 
          <div>
            <VscAccount/>
             {user}
             </div>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    );
  };