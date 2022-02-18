import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

import SensorDataView from "./components/SenosrDataView";
import Time from "./components/Time";

const socket = io("http://localhost:3100/read-sensor-data", {
  transports: ["websocket"],
});

function App() {
  const [sensorData, setSensorData] = useState({
    temp: "",
    humi: "",
    co2: "",
  });

  socket.on("connect", () => {
    console.log(socket.id);
  });

  socket.on("disconnect", () => {
    console.log(socket.id);
  });

  socket.on("sensorDataFromApi", (data) => {
    console.log("sensorDataFromApi : ", data);
  });

  useEffect(() => {}, [socket]);

  return (
    <>
      <SensorDataView data="banana" sub="temp" value="2" />
      <SensorDataView data="apple" sub="humi" vlaue="3" />
      <SensorDataView data="candy" sub="co2" value="4" />
      <Time />
    </>
  );
}

export default App;
