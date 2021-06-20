import * as actionTypes from "./constants";
import { getBannerRequest, getRecommendListRequest } from "@/api/request";
import { NewDispatch } from "@/store";
import { Banner, RecommendItem } from "@/types/recommend";

export const changeBannerList = (payload: Banner[]) => ({
  type: actionTypes.CHANGE_BANNER,
  payload,
});

export const changeRecommendList = (payload: RecommendItem[]) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  payload,
});

export const getBannerList = () => {
  return async (dispatch: NewDispatch) => {
    try {
      const res = await getBannerRequest();
      dispatch(changeBannerList(res.banners));
    } catch (e) {
      console.error(e);
    }
  };
};

export const getRecommendList = () => {
  return async (dispatch: NewDispatch) => {
    try {
      const res = await getRecommendListRequest();
      dispatch(changeRecommendList(res.result));
    } catch (e) {
      console.error(e);
    }
  };
};

export const changeEnterLoading = (payload: boolean) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  payload,
});
