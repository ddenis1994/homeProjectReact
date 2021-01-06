
import { GoPlusSmall } from "react-icons/go";
import { Nav, Navbar } from "react-bootstrap";
import { BsPen } from "react-icons/bs";
import { AiOutlineFolderOpen } from "react-icons/ai";
import "../css/FolderBar.css"
import { connect } from "react-redux";
import { selectFolder } from "../actions/FolderBarActions";

const SideBar=({folders=[],onFolderSelectPressed})=>{

    
const listOfFolders=folders.map((folder,i)=>(
    <li key={i}>
    <Nav.Link >
        <div className="continer">
            <div className="row " >
                <div className="">
                    <span className="badge badge-light"><AiOutlineFolderOpen/></span>
                </div>
                <div className="" onClick={()=>{   
                    onFolderSelectPressed(folder)
            }}>
                    {folder} 
                </div>
            </div>        
        </div>
    </Nav.Link>
    </li>
));
return(
    <Nav defaultActiveKey="/home" className="flex-column " variant="tabs">
        <div className="container">
        <Navbar.Brand>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-4">
                        Folders 
                    </div>
                    <div className="col-4">
                        <div className="container">
                            <span className="badge badge-light"><BsPen/></span>
                            <span className="badge badge-light"><GoPlusSmall/></span>
                        </div>
                    </div>
                </div>
            </div>
            
        </Navbar.Brand>
        <ul className="folderList">
        {listOfFolders}
        </ul>
        </div>
    </Nav>
);
}

const mapStateToProps = state => ({
    folders: state.folderR.folders,
});


  const mapDispachToProps = dispach =>({
      onFolderSelectPressed: text =>dispach(selectFolder(text)),
  });
  

export default connect(mapStateToProps,mapDispachToProps)(SideBar);