import React, { useState } from "react";

const MeterUnits = ({ totalBill, setTotalBill }) => {
  return (
    <div className="top-0 mt-[64px] pt-2 mx-1">
      <div className="uppercase text-center p-2 bg-blue-950 text-white mx-2 ">
        Enter main meter details :
      </div>
      <div className="bg-gray-900 rounded-full items-center m-4 text-center grid grid-cols-2 gap-2  text-white p-1">
        {/* <h1>This month Unit</h1>
        <input
          className="outline-none
        bg-black border border-white p-1 rounded"
          type="text"
        /> */}
        <h1>Total Bill</h1>
        <input
          value={totalBill}
          onChange={(e) => {
            setTotalBill(e.target.value);
          }}
          className="outline-none text-xl
        bg-black border border-gray-500 p-1 w-32 mx-auto rounded-xl text-center"
          type="number"
        />
      </div>
    </div>
  );
};

export default MeterUnits;
