import { axiosInstance } from "./config";
import { GetBannerRequestAPI, GetRecommendListRequestAPI } from "./types";

// 轮播图数据
export const getBannerRequest = () => {
  return axiosInstance.get("/banner") as Promise<GetBannerRequestAPI>;
};

// 推荐歌单列表数据
export const getRecommendListRequest = () => {
  return axiosInstance.get(
    "/personalized"
  ) as Promise<GetRecommendListRequestAPI>;
};
