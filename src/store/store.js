import { createStore, combineReducers } from "redux";
import cakeReduer from "../redux/cakes/reducer/cakeReduer";
import iceCreameReducer from "../redux/iceCream/reducer/iceCreameReducer";

const rootReducer = combineReducers({
    cake: cakeReduer,
    cream: iceCreameReducer
  });
  
const store = createStore(rootReducer);


export default store
