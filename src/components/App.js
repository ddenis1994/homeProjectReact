import '../css/App.css';
import Page from "./Page.js"
import  TopBar from "./TopBar";
import TeamBar from "./TeamBar"
import ButtomManu from "./ButtomManu"
import FolderBar from "./FolderBar";



const user={
  username:"user123",
  userFolders:["Guide flow","Simple Project","new Folder"]
}
const teamMemners={
  companyMembers:["Audrey smith","Daisy Nail"]
}

function App() {



  return (

<div className="container vh-100 align-items-center col justify-content-center" >
  <div className="row border  ">
    <div className="container-fluid ">
    <TopBar user={user.username}/>
    </div>
  </div>

  <div className="row  ">
      <div className="col-md-3 border ">
        <div className="row container-fluid ">
          <FolderBar folders={user.userFolders}/>
          <br/>
        </div>
        <div className="row container-fluid ">
          <TeamBar members={teamMemners.companyMembers}/>
        </div>
      </div>
      <div className="col border container-fluid">
      <div className="row container-fluid">
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

export default App;





