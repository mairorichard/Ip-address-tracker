import React from "react";

import Large from "./assets/pattern-bg-desktop.png";

import IPAdress from "./components/IPAdress";

function App() {
  return (
    <div className="">
      {/* images */}
      <div className="z-0">
        <div className="">
          <img src={Large} alt="" className="w-full h-full object-cover" />
        </div>
        {/* <div className="absolute inset-0">
          <img src={Small} alt="" className="w-full h-full object-cover" />
        </div> */}
      </div>
      {/* /images */}

      <IPAdress />
    </div>
  );
}

export default App;
