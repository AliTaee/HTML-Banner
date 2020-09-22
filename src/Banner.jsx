import React, { useState } from "react";
import "./styles/main.scss";
import { ReactComponent as ReloadIcon } from "./assets/svg/reload.svg";

// Components
import LoadingBanner from "./components/loading/loading";
import AppleWatchBanner from "./banners/apple-watch/banner";

function Banner() {
  const [reload, setReload] = useState(false);

  function handleReload() {
    setReload(!reload);

    setTimeout(() => {
      setReload(false);
    }, 750);
  }

  return (
    <section className="center">
      {reload ? <LoadingBanner /> : <AppleWatchBanner />}

      <button onClick={handleReload} className="btn btn_svg-white">
        Reload <ReloadIcon />
      </button>
    </section>
  );
}

export default Banner;
