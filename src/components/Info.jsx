import React from "react";

const Info = ({ ipAddress, location, timezone, isp }) => {
  return (
    <div className="flex mx-24">
      <div className="bg-gray-100 px-12 py-8 rounded-2xl shadow-2xl">
        <div className="flex gap-14">
          {/* info */}
          <div className="flex flex-col">
            <span className="text-dark-gray text-base">IP ADDRESS</span>
            <h2 className="font-medium text-xl text-vdark-gray">{ipAddress}</h2>
          </div>
          {/* /info */}

          <div className="w-[1px] h-15 bg-dark-gray"></div>

          {/* info */}
          <div className="flex flex-col">
            <span className="text-dark-gray text-base">LOCATION</span>
            <h2 className="font-medium text-xl text-vdark-gray">{location}</h2>
          </div>
          {/* /info */}

          <div className="w-[1px] h-15 bg-dark-gray"></div>

          {/* info */}
          <div className="flex flex-col">
            <span className="text-dark-gray text-base">TIMEZONE</span>
            <h2 className="font-medium text-xl text-vdark-gray">{timezone}</h2>
          </div>
          {/* /info */}

          <div className="w-[1px] h-15 bg-dark-gray"></div>

          {/* info */}
          <div className="flex flex-col">
            <span className="text-dark-gray text-base">ISP</span>
            <h2 className="font-medium text-xl text-vdark-gray">{isp}</h2>
          </div>
          {/* /info */}
        </div>
      </div>
    </div>
  );
};

export default Info;
