import { combineReducers } from "redux";
import { routesReducer } from "./routesReducer";

export const rootReducer = combineReducers({
  routes: routesReducer,
});


export type RootState = ReturnType<typeof rootReducer>
