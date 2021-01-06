
import { Card } from "react-bootstrap";
import  "../css/Project.css";

export default function Project ({project,keyValue}){
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
        <Card bg="Light" border="info" style={{ width: '10rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>
            {details}
        </Card.Text>
        </Card.Body>
    </Card>
    )
}

