
import { GoPlusSmall } from "react-icons/go";
import { Nav, Navbar } from "react-bootstrap";
import { BsPen } from "react-icons/bs";
import { VscAccount} from  "react-icons/vsc";
import "../css/TeamBar.css"

export default function TeamBar({members}){

    const listOfMembersObject=members.map((member,i)=>({
        id:i,
        title:member
    }));

    const listOfMembers=listOfMembersObject.map((member)=>(
        <li key={member.id}>
        <Nav.Link >
            
            <div className="continer">
                <div className="row ">
                    <div className="">
                        <span className="badge badge-light"><VscAccount/></span>
                    </div>
                    <div className="">
                        {member.title} 
                    </div>
                </div>    

            </div>
   
        </Nav.Link>
        </li>
    ));

    return(
      <Nav defaultActiveKey="/home" className="flex-column">
        <div className="container">
        <Navbar.Brand>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-4">
                        Team Members 
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
        
        <ul className="membersList">
        {listOfMembers}
        </ul>
        </div>
      </Nav>
    );
  }

  