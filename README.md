# VCEMS-CLIENT

This project is a React-based client application for the VCEMS (Vishnu Energy Monitoring System). It provides a user interface for monitoring energy consumption, viewing graphs, and accessing various features related to energy management.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Dashboard**: Overview of energy consumption with real-time data.
- **Graphs**: Visual representation of energy consumption over time.
- **PCC Monitoring**: Detailed monitoring of different PCCs (Power Consumption Centers).
- **Predictions**: Energy consumption predictions based on historical data.
- **Sensor Data**: Access to raw sensor data for detailed analysis.
- **Dark Mode**: Toggle between light and dark themes for better user experience.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Vite**: Next-generation frontend tooling.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: Promise-based HTTP client for making API requests.
- **Recharts**: Composable charting library built on React components.
- **React Router**: Declarative routing for React applications.
- **ESLint**: Linting tool for identifying and fixing problems in JavaScript code.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/suryanaidu048/VCEMS-CLIENT.git
   cd VCEMS-CLIENT



Install dependencies:
npm install



Start the development server:
npm run dev



Build the project for production:
npm run build



Preview the production build:
npm run preview



Usage

Once the development server is running, you can access the application at http://localhost:3000. The application provides various routes for different functionalities:



/: Dashboard with an overview of energy consumption.

/graphs: Graphs showing energy consumption over time.

/Pcc1, /Pcc2, /Pcc3: Detailed monitoring of different PCCs.

/SingleMeter/:id: Detailed view of a single meter.

/sensordata: Access to raw sensor data.

/predictions: Energy consumption predictions.

/video: Embedded video for additional information.

/image: Display of an image related to the project.


Project Structure

The project structure is organized as follows:


VCEMS-CLIENT/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── CurrentTime.jsx
│   │   ├── EnergyUnits.jsx
│   │   ├── Loading.jsx
│   │   ├── PageNotFound.jsx
│   │   ├── Panels.jsx
│   │   ├── Sidebar.jsx
│   │   ├── ThemeContext.jsx
│   │   ├── Tiegrad.jsx
│   │   └── Video.jsx
│   ├── constants/
│   │   └── index.js
│   ├── data/
│   │   └── api.js
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── DatewiseGraphs.jsx
│   │   ├── Pcc1.jsx
│   │   ├── Pcc2.jsx
│   │   ├── Pcc3.jsx
│   │   ├── Prediction.jsx
│   │   ├── PredictionBarChart.jsx
│   │   ├── SingleMeter.jsx
│   │   └── Data.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md

Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.



Fork the repository.

Create a new branch (git checkout -b feature/your-feature).

Make your changes.

Commit your changes (git commit -m 'Add your feature').

Push to the branch (git push origin feature/your-feature).

Open a pull request.


License

This project is licensed under the MIT License. See the LICENSE file for more details.
