import { Banner, RecommendItem } from "@/types/recommend";

export interface GetBannerRequestAPI {
  banners: Banner[];
}

export interface GetRecommendListRequestAPI {
  result: RecommendItem[];
}
