import thingstodoReducer from "./thingstodoReducer";

import { combineReducers } from 'redux'

const thinglistReducer = combineReducers({
    thingstodoReducer
})
export default thinglistReducer;