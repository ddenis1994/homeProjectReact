import { SELECT_FOLDER,DELETE_FOLDER,UPDATE_FOLDER,UPDATE_FOLDERS } from "../actions/FolderBarActions";



  const folder={
    folderName:"Simple Project",
    projects:[
      {name:"Onboarding aperiam",
    Theme:"Dark blue"},
    {
      name:"Onboarding aperiam",
      update:"2019/04/22",
      slides:"12"
    },
    {
      name:"Onboarding aperiam",
      update:"2019/04/22",
      slides:"12"
    },
    {
      name:"Onboarding aperiam",
      update:"2019/04/22",
      slides:"12"
    },
    {
      name:"Onboarding aperiam",
      update:"2019/04/22",
      slides:"12"
    },
    {
      name:"Onboarding aperiam",
      update:"2019/04/22",
      slides:"12"
    }
    ]
  };

  const folder2={
    folderName:"Guide flow",
    projects:[
      {name:"Onboarding aperiam",
    Theme:"Dark blue"},
    {
      name:"Onboarding aperiam",
      update:"2019/04/22",
      slides:"12"
    },
    {
      name:"Onboarding aperiam",
      update:"2019/04/22",
      slides:"12"
    },
    {
      name:"Onboarding aperiam",
      update:"2019/04/22",
      slides:"12"
    }
    ]
  };

  const folder3={
    folderName:"new Folder",
    projects:[
      {name:"Onboarding aperiam",
    Theme:"Dark blue"},
    {
      name:"Onboarding aperiam",
      update:"2019/04/22",
      slides:"12"
    }
    ]
  };

  const foldersList=[folder,folder2,folder3];

export const folderR=(state={ 
    projects: [],
    folderUse:"" ,
    folders:[],
}
    ,action) =>{
    
    const {type , payload}=action
    switch (type){
        case SELECT_FOLDER:{
            const { folder }=payload;
            let folderToReturn;
            foldersList.forEach(item=>{
                if (item.folderName===folder) {
                    folderToReturn=item
                }
            })
            ;
            return {
                folders:state.folders,
                folderUse:folder,
                projects : folderToReturn.projects};
        }
        case DELETE_FOLDER:{
            //FOR LATER
            return state
        }
        case UPDATE_FOLDER:{
            //FOR LATER
            return state
        }
        case UPDATE_FOLDERS:{
          
          const { folders }=payload;
          console.log(folders);
          return {
            folders:folders,
          };
      }

        default:
            return state
    }
}