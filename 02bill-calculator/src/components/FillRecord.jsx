import React, { useState } from "react";

const FillRecord = ({ totalBill }) => {
  const [customer, setCustomer] = useState([]);

  function handleAdd() {
    setCustomer((prev) => [
      ...prev,
      { prevUnits: 0, latestUnits: 0, totalUnits: 0, ratio: 0 },
    ]);
  }

  function handleRemove() {
    setCustomer((prev) => [...prev.slice(0, prev.length - 1)]);
  }

  function handlePastChange(index, value) {
    setCustomer((prev) => {
      const updatedCust = [...prev];
      if (value >= 0) {
        updatedCust[index].prevUnits = value;
      }

      return updatedCust;
    });
  }

  function handleLatestChange(index, value) {
    setCustomer((prev) => {
      const updatedCust = [...prev];
      if (value >= 0) {
        updatedCust[index].latestUnits = value;
      }
      return updatedCust;
    });
  }

  function calculateRatio(index) {
    let allUnitsUsed = 0;
    customer.map((cust) => {
      allUnitsUsed = cust.totalUnits + allUnitsUsed;
    });

    const ratio =
      allUnitsUsed !== 0 ? customer[index].totalUnits / allUnitsUsed : 0;

    return ratio;
  }

  function calculateTotalUnitUsed(index) {
    customer[index].totalUnits =
      customer[index].latestUnits - customer[index].prevUnits;
    customer[index].ratio = calculateRatio(index);
    return customer[index].totalUnits;
  }

  function calculateBill(index) {
    return (customer[index].ratio * totalBill).toFixed(2);
  }

  return (
    <div className="p-1 bg-black">
      <h1 className="text-white ml-4 underline-offset-4 underline">
        Add customer Unit Details:
      </h1>
      <div className="text-white m-4 border rounded-xl p-2 ">
        <div className="grid grid-cols-3 gap-2 m-2">
          <h1 className="text-gray-500">Name</h1>
          <h1 className="text-gray-500">Previous units</h1>
          <h1 className="text-gray-500">Latest units</h1>
        </div>

        {customer.map((customer, i) => (
          <div key={i} className="grid grid-cols-3 gap-2 m-2">
            <h1>Customer {i + 1} </h1>
            <input
              onChange={(e) => handlePastChange(i, e.target.value)}
              value={customer.prevUnits || ""}
              name="lastMonth"
              className="border border-white bg-black rounded p-1"
              type="number"
            />
            <input
              onChange={(e) => handleLatestChange(i, e.target.value)}
              value={customer.latestUnits || ""}
              name="thisMonth"
              className="border border-white bg-black rounded p-1"
              type="number"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3 mx-4 mb-4">
        <button
          onClick={handleAdd}
          className="text-white border p-2 bg-green-700 hover:bg-green-800 rounded w-20"
        >
          add
        </button>
        <button
          onClick={handleRemove}
          className="text-white border p-2 bg-red-700 hover:bg-red-800 rounded w-20"
        >
          remove
        </button>
      </div>
      <div className="text-white  m-2 border-t ">
        <h1 className="uppercase text-center">Calculated Bill</h1>
        <div className="text-white mt-2 m-2 rounded-xl  border p-2">
          <div className="grid grid-cols-3 text-gray-600 mx-2 text-center">
            <h1>Name </h1>
            <h1>Total Unit</h1>
            <h1>Total Bill</h1>
          </div>

          {customer.map((customer, index) => (
            <div
              key={index}
              className="grid grid-cols-3 p-2 rounded text-center "
            >
              <h1>Customer {index + 1} </h1>
              <p>{calculateTotalUnitUsed(index)}</p>
              <p>{calculateBill(index)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FillRecord;
