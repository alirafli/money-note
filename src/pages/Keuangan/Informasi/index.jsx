import React from "react";
import { Button, Card } from "../../../components";
import { moneyData } from "./data";
const Informasi = () => {
  return (
    <div className="w-9/12 mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {moneyData.map((data, key) => {
          return (
            <Card
              key={key}
              amount={data.amount}
              type={data.type}
              infoLink={data.infoLink}
            />
          );
        })}
      </div>
      <div className="mx-auto w-fit mt-10">
        <Button className="">Seluruh Informasi Keuangan</Button>
      </div>
    </div>
  );
};

export default Informasi;
