import React, { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("HEX");
  const [color, setColor] = useState("#786A64");
  const generateRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * hex.length);
      hexColor += hex[index];
    }

    setColor(hexColor);
  };
  const generateRandomRgbColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    setColor(`rgb(${r},${g},${b})`);
  };

  return (
    <div
      className={`h-[100vh] flex flex-col justify-center items-center`}
      style={{ backgroundColor: color }}
    >
      <div className=" text-center">
        <h1 className="text-3xl">{color}</h1>
        <button
          className="border border-slate-950 text-slate-950 p-2 m-4 rounded-md"
          onClick={() => setTypeOfColor("HEX")}
        >
          HEX Color
        </button>
        <button
          className="border border-slate-950 text-slate-950 p-2 m-4 rounded-md"
          onClick={() => setTypeOfColor("RGB")}
        >
          RGB color
        </button>
      </div>
      <div className="text-center border border-slate-950 text-slate-900 p-1 m-4 rounded-md hover:bg-slate-800 hover:text-slate-100 transistion-all duration-500 ease-in-out">
        <button
          onClick={
            typeOfColor === "HEX"
              ? generateRandomHexColor
              : generateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
    </div>
  );
};

export default RandomColor;
