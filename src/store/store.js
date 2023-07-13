import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import cakeReduer from "../redux/cakes/reducer/cakeReduer";
import iceCreameReducer from "../redux/iceCream/reducer/iceCreameReducer";

const rootReducer = combineReducers({
    cake: cakeReduer,
    cream: iceCreameReducer
  });
  
const store = createStore( rootReducer, applyMiddleware(logger) );


export default store
