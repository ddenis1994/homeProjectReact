import '../css/App.css';
import Page from "./Page.js"
import  TopBar from "./TopBar";
import TeamBar from "./TeamBar"
import ButtomManu from "./ButtomManu"
import FolderBar from "./FolderBar";
import {useEffect} from 'react';
import { updateFolders } from "../actions/FolderBarActions";
import { connect } from "react-redux";
import { Row ,Col } from "react-bootstrap";

//http://localhost:4000/folder

const user={
  username:"user123",
  userFolders:["Guide flow","Simple Project","new Folder"]
}
const teamMemners={
  companyMembers:["Audrey smith","Daisy Nail"]
}

function App({onUpdateFolders}) {

  useEffect(()=>{
    fetch('http://localhost:4000/folder')
    .then((response)=>response.json())
    .then((response)=>onUpdateFolders(response))
  })


  return (

<div className="container vh-100 align-items-center col justify-content-center" >
  <div className="row border  ">
    <div className="container-fluid ">
    <TopBar user={user.username}/>
    </div>
  </div>

  <div className="row  maxSize">
      <div className="col-md-3 border ">
        <div className="row container-fluid ">
          <FolderBar/>
          <br/>
        </div>
        <div className="row container-fluid ">
          <TeamBar members={teamMemners.companyMembers}/>
        </div>
      </div>
      <div className="col border container-fluid ">
      <div className="row container-fluid ">
        <Page/>
        </div>
      </div>
    </div>
  <div className="row border bottomNev">
      <ButtomManu />
      </div>

</div>


  ); 
}

const mapDispachToProps = dispach =>({
  onUpdateFolders: folders =>dispach(updateFolders(folders)),
});

export default connect(null,mapDispachToProps)(App);





