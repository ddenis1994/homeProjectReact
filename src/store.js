import { createStore,combineReducers } from "redux";
import { folderR } from "./reducers/folderBarReducers";
const reducers={
    folderR
};

const rootReduces=combineReducers(reducers);

const store = () => createStore(rootReduces);
export default store