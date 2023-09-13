import React from "react";

const ResultDetails = ({ result = {} }) => {
  const {
    originalprice,
    originaldiscount,
    type,
    priceAfterDiscount,
    youSaved,
    discountPercentage,
  } = result;
  return (
    <>
      <div className="text-left">
        {originalprice && originaldiscount && (
          <p>
            With original price ${originalprice} and ${originaldiscount}{" "}
            discount,
          </p>
        )}
        <h6 className="text-slate-950 text-base font-semibold">
          Price after discount:{" "}
          <strong className="text-custom-green">${priceAfterDiscount}</strong>
        </h6>
        {type === "percentoff" ? (
          <h6 className="text-slate-950 text-base font-semibold">
            You saved:{" "}
            <strong className="text-custom-green">${youSaved}</strong>
          </h6>
        ) : (
          <h6 className="text-slate-950 text-base font-semibold">
            Discount percentage:{" "}
            <strong className="text-custom-green">
              {discountPercentage.toFixed(0)}%
            </strong>
          </h6>
        )}
      </div>
    </>
  );
};

export default ResultDetails;
