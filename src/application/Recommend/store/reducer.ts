import { Banner, RecommendItem } from "@/types/recommend";
import { AnyAction } from "redux";
import * as actionTypes from "./constants";

export interface RecommendState {
  bannerList: Banner[];
  recommendList: RecommendItem[];
  enterLoading: boolean;
}

const defaultState = {
  bannerList: [],
  recommendList: [],
  enterLoading: false,
};

const reducer = (state = defaultState, action: AnyAction): RecommendState => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      state.bannerList = action.payload;
      return state;
    case actionTypes.CHANGE_RECOMMEND_LIST:
      state.recommendList = action.payload;
      return state;
    case actionTypes.CHANGE_ENTER_LOADING:
      state.enterLoading = action.payload;
      return state;
    default:
      return state;
  }
};

export default reducer;
