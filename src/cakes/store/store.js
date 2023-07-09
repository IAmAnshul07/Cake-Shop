import { configureStore } from "redux";
import cakeReduer from "../reducer/cakeReduer";

const store = configureStore(cakeReduer);

export default store