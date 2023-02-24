import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import dataLimit from "./middlewares/dataLimit";
import bookingReducer from "./booking/bookingReducer";

//create store add apply middleware
const store = createStore(
    bookingReducer,
    composeWithDevTools(applyMiddleware(dataLimit))
);

export default store;