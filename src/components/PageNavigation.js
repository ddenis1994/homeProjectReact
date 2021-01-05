
import { BsArrowRight } from "react-icons/bs";
import {  Navbar,Form ,FormControl} from "react-bootstrap";

const PageNavigation=function({folderName,size}){
    return(
        <>
        <div className="container-fluid">
        <Navbar bg="light" expand="lg">
            <Navbar.Brand >{folderName} <BsArrowRight /> {size} {folderName} projects</Navbar.Brand>

        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        </li>
        </ul>
        </Navbar>
        </div>
        </>
    );
}

export default PageNavigation;