import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

// Create logger middleware
const logger = createLogger();

// Create the Redux store with logger middleware
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
