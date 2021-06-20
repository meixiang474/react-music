import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { forceCheck } from "react-lazyload";
import { actionCreators } from "./store";
import Slider from "@/components/Slider";
import RecommendList from "@/components/RecommendList";
import Loading from "@/baseUI/Loading";
import Scroll from "@/baseUI/Scroll";
import { Content } from "./style";
import { NewDispatch, RootState } from "@/store";
import { parallel } from "@/utils";

function Recommand() {
  const { bannerList, recommendList, enterLoading } = useSelector<
    RootState,
    RootState["recommend"]
  >((state) => state.recommend);

  const dispatch = useDispatch<NewDispatch>();

  useEffect(() => {
    const requests = [];
    if (bannerList.length === 0) {
      requests.push(dispatch(actionCreators.getBannerList()));
    }
    if (recommendList.length === 0) {
      requests.push(dispatch(actionCreators.getRecommendList()));
    }
    if (requests.length > 0) {
      dispatch(actionCreators.changeEnterLoading(true));
      parallel(requests).then(() => {
        dispatch(actionCreators.changeEnterLoading(false));
      });
    }
  }, [dispatch, bannerList.length, recommendList.length]);

  return (
    <Content>
      <Scroll onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerList} />
          <RecommendList recommendList={recommendList} />
        </div>
      </Scroll>
      {enterLoading && <Loading />}
    </Content>
  );
}

export default React.memo(Recommand);
