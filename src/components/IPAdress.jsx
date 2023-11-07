import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Info from "./Info";
import Map from "./Map";

const IPAdress = () => {
  const [IPAddress, setIPAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [ISP, setISP] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: 27.5035,
    lng: 77.67215,
  });

  const fetchLocation = (ipAddress = "") => {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_CHoUHey8mt4qfgUmYX1u437Jry1jg&ipAddress=${ipAddress}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setIPAddress(data.ip);
        setLocation(
          `${data.location.city}, ${data.location.country} ${data.location.postalCode}`
        );
        setTimezone(`UTC ${data.location.timezone}`);
        setISP(`${data.isp}`);
        // setCoordinates({ lat: data.location.lat, lng: data.location.lng });
      });
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className="">
      <div className="-mt-[16rem] grid place-items-center gap-12">
        <h1 className="text-3xl text-white font-medium mt-10 ">
          IP Address Tracker
        </h1>
        <div className="">
          <SearchBar
            setIPAddress={setIPAddress}
            fetchLocation={fetchLocation}
          />
        </div>
        <div className="">
          <Info
            ipAddress={IPAddress}
            location={location}
            timezone={timezone}
            isp={ISP}
          />
        </div>
      </div>

      <div className="w-full z-0 mt-5">
        <Map coordinates={coordinates} />
      </div>
    </div>
  );
};

export default IPAdress;
