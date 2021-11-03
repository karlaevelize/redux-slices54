import { combineReducers, createStore } from "redux";
import balanceReducer from "./balance/reducer"
import userReducer from "./user/reducer"
import pizzaReducer from "./pizzas/reducer"

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

const store = createStore(
  combineReducers({
    balance: balanceReducer,
    users: userReducer,
    pizzas: pizzaReducer
  }),
  enhancer
);

export default store;