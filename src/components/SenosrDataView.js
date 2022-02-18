import React, { useEffect, useState } from "react";

function SensorDataView(props) {
  return (
    <>
      <p>
        {props.sub}: {props.data}
      </p>
    </>
  );
}

export default SensorDataView;
