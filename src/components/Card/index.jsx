import React from "react";
import Text from "../Text";
import { NumericFormat } from "react-number-format";

const Card = ({ amount, infoLink, type }) => {
  return (
    <div className="bg-gray-300 w-fit mx-auto">
      <div className="pt-6 px-4">
        <div className="mb-2 mr-2">
          <Text variant="p2" className="">
            Rp
            <NumericFormat
              displayType="text"
              value={amount}
              allowLeadingZeros
              thousandSeparator=","
            />
            ;
          </Text>
          <Text variant="p3">{type}</Text>
        </div>
      </div>
      <div className="bg-blue-200 text-center py-1" to={infoLink}>
        <Text variant="p3"> Info lainnya {">"}</Text>
      </div>
    </div>
  );
};

export default Card;
