import React from "react";
const names = {
  e: "Event type",
  E: "Event time",
  s: "Symbol",
  c: "Close price",
  o: "Open price",
  h: "High price",
  l: "Low price",
  v: "Total traded base asset volume",
  q: "Total traded quote asset volume",
};
const PriceList = ({ data }) => {
  function nameChanger(smallName) {
    return names[smallName];
  }

  const generatePriceList = (object) => {
    return Object.values(object).map((node) => {
      return (
        <div key={node.s} className="card">
          {Object.keys(node).map((item) => (
            <div>
              <label>{nameChanger(item)}:</label>
              <span>{node[item]}</span>
            </div>
          ))}
        </div>
      );
    });
  };
  return (
    <>
      <div className="list_container">{generatePriceList(data)}</div>
    </>
  );
};

export default PriceList;
