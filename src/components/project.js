
import  "../css/Project.css";

export default function Project ({project}){
    var details=[];
    var propValue;
    for(var propName in project) {
        propValue = project[propName]
        details.concat(propName)
        details.concat(propValue)
        if(propName!=="name")
        details+=[ propValue+" "]
    }

    return(
        <div className="card border-primary mb-3 cardstyle">
            <div className="card-body text-primary">
                <h5 className="card-title"> {project.name}</h5>
            </div>
            <div className="card-header">{details}</div>
                
        </div>
    )
}