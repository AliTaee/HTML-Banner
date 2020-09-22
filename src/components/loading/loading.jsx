import React from "react";
import "./loading.scss";
import { ReactComponent as Spinner } from "../../assets/svg/spinner.svg";

const LoadingBanner = () => {
  return (
    <div className="loading">
      <Spinner />
    </div>
  );
};

export default LoadingBanner;
