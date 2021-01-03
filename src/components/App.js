import '../css/index.css';
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

<div className="container-fluid  main-wrapper section"  >
  <div className="row">
    <div className="container-fluid ">
    <TopBar user={user.username}/>
    </div>
  </div>
  <div className="row">
    <div className="col">
      <div className="row">
        <FolderBar folders={user.userFolders}/>
        <br/>
      </div>
      <div className="row">
        <TeamBar members={teamMemners}/>
      </div>

    </div>
    <div className="col">
    <Page />
    </div>
  </div>
  <div className="row">
  <div className="container-fluid ">
      <ButtomManu />
      </div>
  </div>
</div>


  ); 
}

export default App;





