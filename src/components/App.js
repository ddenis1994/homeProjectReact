import '../css/App.css';
import Page from "./Page.js"
import  TopBar from "./TopBar";
import TeamBar from "./TeamBar"
import ButtomManu from "./ButtomManu"
import FolderBar from "./FolderBar";
import {useEffect} from 'react';
import { updateFolders } from "../actions/FolderBarActions";
import { connect } from "react-redux";
import { Row ,Col, Container } from "react-bootstrap";

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
      <Container fluid>
        <Row>
          <Col>
          <TopBar user={user.username}/>
          </Col>
        </Row>
        <Row>
          <Col md="auto">
          <Row>
          <FolderBar/>
          </Row>
          <Row>
          <TeamBar members={teamMemners.companyMembers}/>
          </Row>
          </Col>
          <Col>
          <Row>
          <Page/>
          </Row>
          </Col>
        </Row>
        <Row className="bottomNev">
        <ButtomManu />
        </Row>

      </Container>

  ); 
}

const mapDispachToProps = dispach =>({
  onUpdateFolders: folders =>dispach(updateFolders(folders)),
});
 
export default connect(null,mapDispachToProps)(App);