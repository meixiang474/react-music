import React from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { NavLink } from "react-router-dom";
import { Tab, Top, TabItem } from "./style";

function Home(props: RouteConfigComponentProps) {
  const { route } = props;
  return (
    <div>
      <Top>
        <span className="iconfont menu icon-caidan"></span>
        <span className="title">网易云音乐</span>
        <span className="iconfont search icon-41"></span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected">
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </NavLink>
        <NavLink to="/singers" activeClassName="selected">
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </NavLink>
        <NavLink to="/rank" activeClassName="selected">
          <TabItem>
            <span>排行榜</span>
          </TabItem>
        </NavLink>
      </Tab>
      {renderRoutes(route?.routes)}
    </div>
  );
}

export default React.memo(Home);
