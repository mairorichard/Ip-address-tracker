import React from "react";
import Info from "./components/Info";
import Map from "./components/Map";
import Large from "./assets/pattern-bg-desktop.png";
import Small from "./assets/pattern-bg-mobile.png";

function App() {
  return (
    <div className="relative grid place-items-center ">
      {/* images */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <img src={Large} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0">
          <img src={Small} alt="" className="w-full h-full object-cover" />
        </div>
      </div> */}
      {/* /images */}
      <div className="z-10">
        <h1 className="text-3xl font-medium mt-10 text-center">
          IP Address Tracker
        </h1>

        <div className="mt-10">
          <div className="">
            <Info />
          </div>
          <div className="">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
