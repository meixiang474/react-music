import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import BetterScroll from "better-scroll";
import styled from "styled-components";

interface ScrollProps {
  direction?: "vertical" | "horizontal"; // 滚动方向
  click?: boolean; // 是否支持点击
  refresh?: boolean; // 是否刷新
  onScroll?: (scroll: any) => any; // 滚动触发的回调函数
  pullUpLoading?: boolean; // 是否显示上拉loading动画
  pullDownLoading?: boolean; // 是否显示下拉loading动画
  pullUp?: () => any; // 上拉加载逻辑
  pullDown?: () => any; // 下拉加载逻辑
  bounceTop?: boolean; // 是否支持向上吸顶
  bounceBottom?: boolean; // 是否支持向下吸底
}

const ScrollContainer = styled.div<{
  ref: any;
}>`
  width: 100%auto;
  height: 100%;
  overflow: hidden;
`;

const Scroll: React.FC<ScrollProps> = forwardRef((props, ref) => {
  const [bScroll, setBScroll] = useState<BetterScroll>();
  const scrollContainerRef = useRef<HTMLDivElement>();
  const {
    direction = "vertical",
    click = true,
    refresh = true,
    bounceBottom = true,
    bounceTop = true,
    pullUp = undefined,
    pullDown = undefined,
    onScroll = undefined,
  } = props;

  useEffect(() => {
    const scroll = new BetterScroll(scrollContainerRef.current!, {
      scrollX: direction === "horizontal",
      scrollY: direction === "vertical",
      probeType: 3,
      click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom,
      },
    });
    setBScroll(scroll);
    return () => {
      setBScroll(undefined);
    };
  }, [direction, bounceBottom, bounceTop, click]);

  // 给实例绑定scroll事件
  useEffect(() => {
    if (!bScroll || !onScroll) return;
    bScroll.on("scroll", (scroll: any) => {
      onScroll(scroll);
    });
    return () => {
      bScroll.off("scroll");
    };
  }, [onScroll, bScroll]);

  //进行上拉到头的逻辑判断，调用上拉刷新的函数
  useEffect(() => {
    if (!bScroll || !pullUp) return;
    bScroll.on("scrollEnd", () => {
      // 判断是否滑倒了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUp();
      }
    });
    return () => {
      bScroll.off("scrollEnd");
    };
  }, [pullUp, bScroll]);

  //进行下拉的判断，调用下拉刷新的函数
  useEffect(() => {
    if (!bScroll || !pullDown) return;
    bScroll.on("touchEnd", (pos: any) => {
      // 判断用户是否下拉
      if (pos.y > 50) {
        pullDown();
      }
    });
    return () => {
      bScroll.off("touchEnd");
    };
  }, [pullDown, bScroll]);

  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  useImperativeHandle(ref, () => ({
    //暴露给外界的方法
    refresh() {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    },
    getBScroll() {
      if (bScroll) {
        //提供scroll实例
        return bScroll;
      }
    },
  }));
  return (
    <ScrollContainer ref={scrollContainerRef}>{props.children}</ScrollContainer>
  );
});

Scroll.defaultProps = {
  direction: "vertical",
  click: true,
  refresh: true,
  onScroll: undefined,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: undefined,
  pullDown: undefined,
  bounceTop: true,
  bounceBottom: true,
};

export default Scroll;
