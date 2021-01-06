import { GET_USER_DATA } from "../actions/userActions";
import {useEffect} from 'react';

export const UserData=(state={
    UserData:""
},action) => {
    const {type ,payload}=action;
    switch (type) {
        case GET_USER_DATA:
            useEffect(()=>{
                fetch('http://localhost:4000/username')
                .then((response)=>response.json())

            })
            return(response)
            break;
    
        default:
            return state;
            break;
    }
}