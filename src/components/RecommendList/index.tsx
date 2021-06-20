import React from "react";
import LazyLoad from "react-lazyload";
import { ListWrapper, ListItem, List } from "./style";
import { getCount } from "@/utils";
import music from "@/assets/images/music.png";

interface Recommend {
  id: number;
  picUrl: string;
  playCount: number;
  name: string;
}

interface RecommendListProps {
  recommendList: Recommend[];
}

function RecommendList(props: RecommendListProps) {
  return (
    <ListWrapper>
      <h1 className="title">推荐歌单</h1>
      <List>
        {props.recommendList.map((item, index) => {
          return (
            <ListItem key={item.id + index}>
              <div className="img_wrapper">
                {/* 起到一个遮罩的作用，能看清文字和图标 */}
                <div className="decorate"></div>
                <LazyLoad
                  placeholder={
                    <img
                      src={music}
                      width="100%"
                      height="100%"
                      alt="list-music"
                    />
                  }
                >
                  <img
                    src={item.picUrl + "?param=300x300"}
                    width="100%"
                    height="100%"
                    alt="list-music"
                  />
                </LazyLoad>

                <div className="play_count">
                  <i className="iconfont play icon-headset"></i>
                  <span className="count">{getCount(item.playCount)}</span>
                </div>
              </div>
              <div className="desc">{item.name}</div>
            </ListItem>
          );
        })}
      </List>
    </ListWrapper>
  );
}

export default React.memo(RecommendList);
