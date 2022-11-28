import React from "react";
import Text from "../Text";
import CurrencyFormat from "react-currency-format";

const Card = ({ amount, infoLink, type }) => {
  return (
    <div className="bg-gray-500 w-fit mx-auto">
      <div className="flex pt-5 px-3">
        <div className="mb-2 mr-2">
          <Text variant="p2" className="">
            <CurrencyFormat
              value={amount}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rp "}
            />
          </Text>
          <Text variant="p3">{type}</Text>
        </div>
        <div>this is icon</div>
      </div>
      <div className="bg-blue-200 text-center py-1" to={infoLink}>
        Info lainnya {">"}
      </div>
    </div>
  );
};

export default Card;
