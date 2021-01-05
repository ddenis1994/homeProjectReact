
import  "../css/project.css";
export default function Project ({project}){
    return(
        <div className="card border-primary mb-3 cardstyle">
            <div className="card-header">{project.name}</div>
                <div className="card-body text-primary">
                    <h5 className="card-title"> {project.Theme} {project.update} {project.slides}</h5>
            </div>
        </div>
    )
}