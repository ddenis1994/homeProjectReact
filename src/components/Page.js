import Project from "./project";
import { connect } from 'react-redux';
import  "../css/Page.css";
import { Row ,Col, Container } from "react-bootstrap";

import  PageNavigation  from "./PageNavigation.js";


const Page= function Page({projects=[],folderUse}){

    const projects2=projects.map((item,i)=>(
        <>
        <Col >
        <Project project={item } keyValue={i}/>
         </Col>
        </>
                

    ));

    return (
      <>
      <PageNavigation folderName={folderUse} size={projects.length} />
      <br/>
        <Row  md={3}>
      {projects2}
      </Row>

      
      
      </>
    );
  }
  const mapStateToProps = state => ({
    projects: state.folderR.projects,
    folderUse: state.folderR.folderUse,
});


  export default connect(mapStateToProps)(Page);
