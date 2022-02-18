import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3100/time", {
  transports: ["websocket"],
});

function Time(props) {
  const [t, setT] = useState({});
  const [dddd, setDddd] = useState("");

  socket.on("connect", () => {
    console.log(socket.id);
  });

  socket.on("disconnect", () => {
    console.log(socket.id);
  });

  function enToKoLang(dddd) {
    if (dddd === "Monday") {
      setDddd("월");
    } else if (dddd === "Tuesday") {
      setDddd("화");
    } else if (dddd === "Wednesday") {
      setDddd("수");
    } else if (dddd === "Thursday") {
      setDddd("목");
    } else if (dddd === "Friday") {
      setDddd("금");
    } else if (dddd === "Saturday") {
      setDddd("토");
    } else if (dddd === "Sunday") {
      setDddd("일");
    }
  }

  useEffect(() => {
    socket.on("time", (data) => {
      setT(data);
      enToKoLang(t.dddd);
    });
  }, [socket]);

  return (
    <>
      <p>
        {t.year}년 {t.month}월 {t.day}일 {dddd}요일 {t.hour}시 {t.minute}분
        {t.second}초
      </p>
    </>
  );
}

export default Time;
