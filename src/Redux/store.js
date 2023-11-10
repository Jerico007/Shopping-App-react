import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import shoppingReducer from "./Reducer/shoppingReducer";
const store = createStore(shoppingReducer,applyMiddleware(thunk));

export default store;