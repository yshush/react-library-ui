import React from "react";

export default function Background() {
  return (
    <div className="bg-gray-700" style={{ height: 1000 }}>
      <div style={{ height: 100 }}>
        <button
          style={{ height: "inherit" }}
          class="bg-sky-500/100 bg-opacity-100"
        ></button>
        <button
          style={{ height: "inherit" }}
          className="bg-sky-500/75"
        ></button>
        <button
          style={{ height: "inherit" }}
          className="bg-sky-500/50"
        ></button>
      </div>
    </div>
  );
}
