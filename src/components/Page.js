import Project from "./project";
import { connect } from 'react-redux';

import  PageNavigation  from "./PageNavigation.js";


const Page= function Page({projects=[],folderUse}){

    const projects2=projects.map((item,i)=>(
        <>
        {i%3===0 ? <div className="row"><div className="col"><li key={i}>
        <Project project={item}/>
        </li></div></div> : 
         <div className="col">
           <li key={i}>
         <Project project={item}/>
         </li></div>}
        
        </>
                

    ));

    return (
      <>
      <PageNavigation folderName={folderUse} size={projects.length} />
      <br/>
      {projects2}
      
      
      </>
    );
  }
  const mapStateToProps = state => ({
    projects: state.folderR.projects,
    folderUse: state.folderR.folderUse,
});


  export default connect(mapStateToProps)(Page);
