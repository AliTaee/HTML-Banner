import React from "react";
import "./styles/main.scss";

function Banner() {
  return (
    <section className="center">
      <div className="bnr">
        <div className="bnr__el bnr__el-0 ">
          <div className="bnr__band bnr__el-bg"></div>
        </div>
        <div className="bnr__el bnr__el-1 ">
          <div className="bnr__watch bnr__el-bg"></div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
