import React from "react";

const ResultTitlle = ({ result = {} }) => {
  const isResultEmpty = Object.keys(result).length === 0;
  const titleClass = isResultEmpty ? "bg-custom-royalblue" : "bg-custom-green";
  const titleText = isResultEmpty
    ? "Modify the values and click the Calculate button to use"
    : "Result";
  return (
    <>
      <h6
        className={`text-white text-left px-2 py-2 text-base mt-3 font-semibold mb-3 ${titleClass}`}
      >
        {titleText}
      </h6>
    </>
  );
};

export default ResultTitlle;
