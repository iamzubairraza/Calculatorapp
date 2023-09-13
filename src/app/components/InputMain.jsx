import React from "react";

const InputMain = ({
  Hasclass = "",
  title = "",
  value = "",
  onChange = () => {},
}) => {
  return (
    <>
      <div className="flex gap-1.5 justify-between items-center mb-1">
        <label className="font-medium text-base w-2/4 text-left">{title}</label>
        <input
          type="text"
          className={`appearance-none w-2/4 px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 ${Hasclass}`}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputMain;
