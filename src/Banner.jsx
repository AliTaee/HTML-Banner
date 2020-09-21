import React from "react";
import "./styles/main.scss";

function Banner() {
  return (
    <section className="center">
      <div className="bnr">
        <div className="bnr__el bnr__el-0">
          <div className="bnr__band bnr__el-bg"></div>
        </div>
        <div className="bnr__el bnr__el-1">
          <div className="bnr__watch bnr__el-bg"></div>
        </div>
        <div className="bnr__el bnr__el-2">
          <a className="bnr__btn" href="https://www.apple.com/watch/">
            buy
          </a>
        </div>
        <div className="bnr__el bnr__el-3">
          <span className="bnr__title">
            apple watch <span className="bnr__title-red">series 6</span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Banner;
