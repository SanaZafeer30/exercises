import { createStore } from "redux";
import { cart, products } from "./reducerRedux";
import { combineReducers } from "redux";
import logger from "./middlewareRedux";

const rootReducer = combineReducers({
    cart,
    products
});
export const store = createStore(rootReducer, logger);