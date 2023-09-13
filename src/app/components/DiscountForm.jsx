"use client";
import React, { useState } from "react";
import InputMain from "./InputMain";
import "./inputs.css";
import toast from "react-hot-toast";

const DiscountForm = ({ result = {}, setresult = () => {} }) => {
  const [priceBeforeDiscount, setPriceBeforeDiscount] = useState("59.99");
  const [discount, setDiscount] = useState("15");
  const [priceAfterDiscount, setPriceAfterDiscount] = useState("");
  const [youSaved, setYouSaved] = useState("");
  const [selectedDiscountType, setselectedDiscountType] =
    useState("percentoff");

  const handleDiscountTypeChange = (e) => {
    setselectedDiscountType(e.target.value);
    setPriceAfterDiscount("");
    setYouSaved("");
  };

  const isFormEmpty = !priceBeforeDiscount || !discount;

  const handleSubmit = (e) => {
    e.preventDefault();
    const priceBeforeDiscountValue = parseFloat(priceBeforeDiscount);
    const discountValue = parseFloat(discount);
    if (
      isNaN(priceBeforeDiscountValue) ||
      isNaN(discountValue) ||
      priceBeforeDiscountValue <= 0 ||
      discountValue < 0
    ) {
      toast.error("Please enter valid Price ");
      return;
    }

    let priceAfterDiscount = 0;
    let youSaved = 0;
    let discountPercentage = 0;

    if (selectedDiscountType === "percentoff") {
      priceAfterDiscount =
        priceBeforeDiscountValue -
        (priceBeforeDiscountValue * discountValue) / 100;
      youSaved = priceBeforeDiscountValue - priceAfterDiscount;
    } else if (selectedDiscountType === "fixedamountoff") {
      priceAfterDiscount = priceBeforeDiscountValue - discountValue;
      youSaved = discountValue;
      discountPercentage = (discountValue / priceBeforeDiscountValue) * 100;
    }
    const formattedPriceAfterDiscount = priceAfterDiscount.toFixed(2);
    const formattedyouSaved = youSaved.toFixed(2);
    if (selectedDiscountType === "fixedamountoff") {
      // toast.info(`Discount Percentage: ${discountPercentage}%`);
    }
    setPriceAfterDiscount(formattedPriceAfterDiscount);
    setYouSaved(formattedyouSaved);
    const FinalResult = {
      ...result,
      type: selectedDiscountType,
      youSaved: formattedyouSaved,
      discountPercentage,
      priceAfterDiscount: formattedPriceAfterDiscount,
      originalprice: priceBeforeDiscountValue,
      originaldiscount: discountValue,
    };
    setresult(FinalResult);
  };

  const handleClear = () => {
    setPriceBeforeDiscount("");
    setDiscount("");
    setPriceAfterDiscount("");
    setYouSaved("");
  };

  return (
    <div className="bg-custom-lightgray p-4 mt-5  border-custom-silvergray border-solid border w-3/4 hover:shadow-2xl">
      <form onSubmit={handleSubmit}>
        <InputMain
          Hasclass="has_doller"
          title="Price before discount :"
          value={priceBeforeDiscount}
          onChange={(e) => setPriceBeforeDiscount(e.target.value)}
        />
        <InputMain
          Hasclass={
            selectedDiscountType === "percentoff" ? "has_percent" : "has_doller"
          }
          title="Discount :"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
        <InputMain
          Hasclass="has_doller"
          title="Price after discount :"
          value={priceAfterDiscount}
          onChange={(e) => setPriceAfterDiscount(e.target.value)}
        />
        {selectedDiscountType !== "fixedamountoff" && (
          <InputMain
            Hasclass="has_doller"
            title="You saved :"
            value={youSaved}
            onChange={(e) => setYouSaved(e.target.value)}
          />
        )}

        <div className="flex gap-1.5 justify-between items-center mb-1">
          <label className="font-medium text-base w-1/2 text-left">
            Discount type :
          </label>
          <div className="w-1/2">
            <div className="flex items-center">
              <input
                type="radio"
                id="percentoff"
                name="percentoff"
                value="percentoff"
                className="form-radio h-5 w-5 text-blue-500"
                checked={selectedDiscountType === "percentoff"}
                onChange={handleDiscountTypeChange}
              />
              <label htmlFor="percentoff" className="ml-2">
                Percent off
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="fixedamountoff"
                name="radioGroup"
                value="fixedamountoff"
                className="form-radio h-5 w-5 text-blue-500"
                checked={selectedDiscountType === "fixedamountoff"}
                onChange={handleDiscountTypeChange}
              />
              <label htmlFor="fixedamountoff" className="ml-2">
                Fixed amount off
              </label>
            </div>
          </div>
        </div>

        {/* button */}
        <div className="flex gap-1.5 justify-center items-center mt-3">
          <button
            type="submit"
            className={`${
              isFormEmpty
                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                : "bg-custom-green hover:bg-custom-silvergray hover:text-black text-white"
            } font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-custom-green`}
            disabled={isFormEmpty}
          >
            Calculate
          </button>
          <button
            type="button"
            className={`${
              isFormEmpty
                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600 text-white"
            } font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-300`}
            disabled={isFormEmpty}
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default DiscountForm;
