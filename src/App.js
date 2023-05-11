import React from "react";
import SingleColor from "./SingleColor";
// import ColorScale from "https://cdn.skypack.dev/color-scales";

function App() {
  const data = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  const [color, setColor] = React.useState("#296630");
  const [value, setValue] = React.useState("#296630");
  const ColorScale = require("color-scales");
  let colorScale = new ColorScale(0, 19, ["#ffffff", `${color}`, "#000000"]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setColor(value);
  };
  return (
    <main>
      <section className="container">
        <h4>Color Generator</h4>
        <form className="color-form" onSubmit={handleSubmit}>
          <input
            type="color"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="btn" style={{ backgroundColor: `${color}` }}>
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {data.map((item, index) => (
          <SingleColor
            getColor={colorScale.getColor(item).toHexString()}
            key={index}
            percent={index}
          />
        ))}
      </section>
      <div className="toastify"></div>
    </main>
  );
}

export default App;
