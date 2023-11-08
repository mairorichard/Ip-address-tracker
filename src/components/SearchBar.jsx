import React, { useState } from "react";

const SearchBar = ({ setIPAddress, fetchLocation }) => {
  const [ip, setIp] = useState("");

  const handleClick = () => {
    setIPAddress(ip);
    fetchLocation(ip);
  };

  return (
    <div>
      <div className="flex ">
        <div className="">
          <label
            htmlFor="Username"
            className="relative h-full flex p-2 rounded-l-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 text-vdark-gray bg-white"
          >
            <input
              type="text"
              id="Username"
              className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-[20rem]"
              placeholder="Username"
              onChange={(e) => setIp(e.target.value)}
            />

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-inherit px-1.5 text-xs text-slate-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded-full ">
              Search for any IP address or domain
            </span>
          </label>
        </div>

        {/* button */}
        <div className="">
          <button
            onClick={handleClick}
            className="group relative inline-flex items-center overflow-hidden rounded bg-vdark-gray px-5 text-white focus:outline-none focus:ring active:bg-indigo-500 h-full"
          >
            <span className="absolute -start-full transition-all group-hover:start-4">
              <svg
                className="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:ms-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="3"
                  d="M2 1l6 6-6 6"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
