import updateStd from "./Reducers/StudentsRed"
import updateTch from "./Reducers/TeachersRed";

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    updateStd,updateTch
});

export default rootReducer;