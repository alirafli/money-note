import React from "react";
import { Button, Text } from "../../../components";
import { NumericFormat } from "react-number-format";

const Kalkulasi = () => {
  const data = [
    { title: "Pemasukan harian", value: 500000 },
    { title: "Ongkos produksi", value: 500000 },
    { title: "Rugi kotor", value: 500000 },
    { title: "Biaya operasional", value: 500000 },
    { title: "Rugi bersih", value: 500000 },
  ];
  return (
    <div className="bg-slate-300 w-6/12 mx-auto p-10 rounded-2xl justify-center">
      {data.map((data, key) => (
        <div>
          <div className="flex justify-between mt-5 mb-2" key={key}>
            <Text variant="p2" weight="semiBold">
              {data.title}
            </Text>
            <Text variant="p2" className="">
              Rp
              <NumericFormat
                displayType="text"
                value={data.value}
                allowLeadingZeros
                thousandSeparator=","
              />
              ;
            </Text>
          </div>
          {key % 2 === 1 ? (
            <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
          ) : (
            ""
          )}
        </div>
      ))}

      <div className="mx-auto w-fit mt-10">
        <Button>Rekap Bulanan</Button>
      </div>
    </div>
  );
};

export default Kalkulasi;
