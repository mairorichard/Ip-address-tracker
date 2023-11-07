import React from "react";

const Info = () => {
  return (
    <div>
      <div className="grid place-items-center">
        {/* search bar */}
        <div className="flex ">
          <div className="">
            <label
              htmlFor="Username"
              className="relative h-full flex p-2 rounded-l-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="Username"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-[20rem]"
                placeholder="Username"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Search for any IP address or domain
              </span>
            </label>
          </div>

          {/* button */}
          <div className="">
            <button className="group relative inline-flex items-center overflow-hidden rounded bg-vdark-gray px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500 h-full">
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
                    stroke-width="3"
                    d="M2 1l6 6-6 6"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        {/* /search bar */}

        {/* main info */}
        <div className="mt-8 bg-gray-100 px-12 py-8 rounded-2xl shadow-2xl">
          <div className="flex gap-14">
            {/* info */}
            <div className="flex flex-col">
              <span className="text-dark-gray text-base">IP ADDRESS</span>
              <h2 className="font-medium text-2xl text-vdark-gray">
                192.8519.62.4
              </h2>
            </div>
            {/* /info */}

            <div className="w-[1px] h-15 bg-dark-gray"></div>

            {/* info */}
            <div className="flex flex-col">
              <span className="text-dark-gray text-base">LOCATION</span>
              <h2 className="font-medium text-2xl text-vdark-gray">Lagos</h2>
            </div>
            {/* /info */}

            <div className="w-[1px] h-15 bg-dark-gray"></div>

            {/* info */}
            <div className="flex flex-col">
              <span className="text-dark-gray text-base">TIMEZONE</span>
              <h2 className="font-medium text-2xl text-vdark-gray">UTC</h2>
            </div>
            {/* /info */}

            <div className="w-[1px] h-15 bg-dark-gray"></div>

            {/* info */}
            <div className="flex flex-col">
              <span className="text-dark-gray text-base">ISP</span>
              <h2 className="font-medium text-2xl text-vdark-gray">
                space x something
              </h2>
            </div>
            {/* /info */}
          </div>
        </div>
        {/* /main info */}
      </div>
    </div>
  );
};

export default Info;
