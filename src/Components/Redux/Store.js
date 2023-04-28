import { legacy_createStore,applyMiddleware } from "redux";
import basicReducer from "./Reducer";
import logger from "redux-logger";




const myStore=legacy_createStore(basicReducer,applyMiddleware(logger))

export default myStore;