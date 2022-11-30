import { legacy_createStore } from "redux";
import cartReducers  from "./reducers/cartReducers";


const store = legacy_createStore(cartReducers)

export default store;