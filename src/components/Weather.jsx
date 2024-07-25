import React, { useState, useEffect } from "react";

const api = {
  key: "1f28f7b7612e46dd21c9d4fd095dbd23",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(
    JSON.parse(localStorage.getItem("weather")) || {}
  );

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          localStorage.setItem("weather", JSON.stringify(result));
        });
    }
  };

  const dateBuilder = (d) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };

  useEffect(() => {
    const savedWeather = localStorage.getItem("weather");
    if (savedWeather) {
      setWeather(JSON.parse(savedWeather));
    }
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-5">
      <div className="relative">
        <input
          placeholder="Search..."
          className="w-full input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl transition-all outline-none"
          name="search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
        <svg
          className="size-6 absolute top-3 right-3 text-gray-500"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
      {weather.main && (
        <div className="mt-5 bg-gray-400 rounded-sm p-4">
          <h2 className="text-2xl">
            {weather.name}, {weather.sys.country}
          </h2>
          <div>{dateBuilder(new Date())}</div>
          <p className="text-lg">{Math.round(weather.main.temp)}°C</p>
          <p className="text-lg">{weather.weather[0].main}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
