import { createStore, combineReducers } from "redux";
import cakeReduer from "../reducer/cakeReduer";

const rootReducer = combineReducers({
    cakeReduer: cakeReduer,
  });
  
const store = createStore(rootReducer);


export default store
