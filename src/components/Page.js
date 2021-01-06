import Project from "./project";
import { connect } from 'react-redux';
import  "../css/Page.css";
import { Row ,Col, Container } from "react-bootstrap";

import  PageNavigation  from "./PageNavigation.js";


const Page= function Page({projects=[],folderUse}){

    const projects2=projects.map((item,i)=>(
        <>
        <Col className="p-5">
        <Project project={item } keyValue={i}/>
         </Col>
        </>
                

    ));

    return (
      <>
      <PageNavigation folderName={folderUse} size={projects.length} />
      <br/>
      <Container>
        <Row  md={5} >
      {projects2}
      </Row>
      </Container>

      
      
      </>
    );
  }
  const mapStateToProps = state => ({
    projects: state.folderR.projects,
    folderUse: state.folderR.folderUse,
});


  export default connect(mapStateToProps)(Page);
