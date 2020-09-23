import React from "react";
import "./banner.scss";
import Config from './config.js'

const AppleWatchBanner = () => {
  return (
    <div className="bnrw">
      <div className="bnrw__el-0">
        <div className="bnrw__band bnrw__el-bg"></div>
      </div>
      <div className="bnrw__el-1">
        <div className="bnrw__watch bnrw__el-bg"></div>
      </div>
      <div className="bnrw__el-2">
        <a className="bnrw__btn" href={Config.link}>
          {Config.btn}
        </a>
      </div>
      <div className="bnrw__el-3">
        <span className="bnrw__title">
        {Config.brand} <span className="bnrw__title-red">{Config.model}</span>
        </span>
      </div>
    </div>
  );
};

export default AppleWatchBanner;
