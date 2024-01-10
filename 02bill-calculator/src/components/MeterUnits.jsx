import React, { useState } from "react";

const MeterUnits = ({ totalBill, setTotalBill }) => {
  return (
    <div className=" mt-20 p-1">
      <div className="text-white ml-5 capitalize underline underline-offset-4">
        {" "}
        Enter main meter details :
      </div>
      <div className="border m-4 rounded-xl grid grid-cols-2 gap-2 items-center text-white p-2">
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
        bg-black border border-white p-1 rounded"
          type="text"
        />
      </div>
    </div>
  );
};

export default MeterUnits;
