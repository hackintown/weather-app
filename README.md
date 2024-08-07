# React Weather Application

A simple weather application built with React, Vite, and styled using Tailwind CSS. It uses the OpenWeatherMap API to fetch and display weather data for any city the user searches for. The app also stores the last searched weather data in local storage.

## Features

- Search for the current weather in any city.
- Display temperature, weather condition, city name, and country.
- Store the last searched weather data in local storage.
- Responsive design with Tailwind CSS.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/react-weather-app.git
    ```
2. Navigate to the project directory:
    ```sh
    cd react-weather-app
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Run the application:
    ```sh
    npm run dev
    ```

## Usage

- Type the name of a city in the search bar and press Enter.
- The weather data for the searched city will be displayed.
- The last searched weather data will be saved in local storage and displayed upon reopening the app.

## Project Structure

```plaintext
react-weather-app/
├── public/
├── src/
│   ├── components/
│   │   └── Weather.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
