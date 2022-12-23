import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";

// composeWithDevTools()
const store = createStore(rootReducer, );

export default store;
