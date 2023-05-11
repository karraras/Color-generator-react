import React from "react";
import rgbToHex from "./utils";

const SingleColor = ({ getColor, percent }) => {
  return (
    <>
      <article className="color" style={{ backgroundColor: `${getColor}` }}>
        <p className="percent-value">{percent}</p>
        <p className="color-value">{getColor}</p>
      </article>
    </>
  );
};

export default SingleColor;
