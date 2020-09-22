import React from "react";
import "./styles/main.scss";

import AppleWatchBanner from "./banners/apple-watch/banner";

function Banner() {
  return (
    <section className="center">
      <AppleWatchBanner />
    </section>
  );
}

export default Banner;
