import styled from "styled-components";
import style from "@/assets/global-style";

//list包装的样式
export const ListWrapper = styled.div`
  max-width: 100%;
  .title {
    font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    line-height: 60px;
  }
`;

//列表的样式
export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row; //主轴的方向
  flex-wrap: wrap; //决定项目是否换行排列，多行排列，从上到下的方向
  justify-content: space-around; //项目在主轴上的对齐方式以及空间分配
`;

//列表中的每一项的样式
export const ListItem = styled.div`
  position: relative;
  width: 32%;
  .img_wrapper {
    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0, 0%, 43%, 0.4), hsla(0, 0%, 100%, 0));
      z-index: 1;
    }
    position: relative;
    height: 0;
    padding-bottom: 100%;
    .play_count {
      position: absolute;
      right: 2px;
      top: 2px;
      font-size: ${style["font-size-s"]};
      line-height: 15px;
      color: ${style["font-color-light"]} !important;
      z-index: 1;
      .play {
        vertical-align: top;
      }
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
  .desc {
    overflow: hidden;
    margin-top: 2px;
    padding: 0 2px;
    text-align: left;
    font-size: ${style["font-size-s"]};
    line-height: 1.4;
    color: ${style["font-color-desc"]};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 18px;
  }
`;
