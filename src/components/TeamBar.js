
import { GoPlusSmall } from "react-icons/go";
import { Nav, Navbar } from "react-bootstrap";
import { BsPen } from "react-icons/bs";
import { AiOutlineFolderOpen } from "react-icons/ai";

export default function TeamBar({members}){

    return(
      <Nav defaultActiveKey="/home" className="flex-column">
        <div className="container">
        <Navbar.Brand>
            <div className="container">
                <div class="row justify-content-between">
                    <div class="col-4">
                        Folders 
                    </div>
                    <div class="col-4">
                        <div className="container">
                            <span className="badge badge-light"><BsPen/></span>
                            <span className="badge badge-light"><GoPlusSmall/></span>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar.Brand>
        {}
        </div>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
        Disabled
        </Nav.Link>
      </Nav>
    );
  }
  