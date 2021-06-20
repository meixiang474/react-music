import { createStore, applyMiddleware, AnyAction } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import reducer from "./reducer";

export type RootState = ReturnType<typeof reducer>;

export type GetState = () => RootState;

export type NewDispatch = ThunkDispatch<RootState, undefined, AnyAction>;

const store = createStore(
  reducer,
  applyMiddleware<NewDispatch, RootState>(thunk)
);

export default store;
