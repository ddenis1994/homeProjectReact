
import { GoPlusSmall } from "react-icons/go";
import { Nav, Navbar } from "react-bootstrap";
import { BsPen } from "react-icons/bs";
import { AiOutlineFolderOpen } from "react-icons/ai";

export default function SideBar({folders}){

const listOfFolders=folders.map((folder,i)=>(
    <Nav.Link >
        <div className="continer">
            <div className="row ">
                <div className="">
                    <span className="badge badge-light"><AiOutlineFolderOpen/></span>
                </div>
                <div className="">
                    {folder} 
                </div>
            </div>        
        </div>
    </Nav.Link>
));
return(
    <Nav defaultActiveKey="/home" className="flex-column " variant="tabs">
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
        {listOfFolders}
        </div>
    </Nav>
);
}
  
