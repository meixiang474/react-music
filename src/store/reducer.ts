import { combineReducers } from "redux-immer";
import produce from "immer";
import { Reducer, AnyAction } from "redux";
import { reducer as recommendReducer } from "@/application/Recommend/store";

interface RootState {
  recommend: ReturnType<typeof recommendReducer>;
}

const reducer: Reducer<RootState, AnyAction> = combineReducers(produce, {
  recommend: recommendReducer,
});

export default reducer;
