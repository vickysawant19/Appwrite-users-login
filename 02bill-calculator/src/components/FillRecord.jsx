import React, { useEffect, useState } from "react";

const FillRecord = ({ totalBill }) => {
  const [customer, setCustomer] = useState([
    { prevUnits: 0, latestUnits: 0, totalUnits: 0, ratio: 0, bill: 0 },
  ]);
  // useEffect(() => {
  //   setCustomer([]);
  // }, []);

  function handleAdd() {
    setCustomer((prev) => [
      ...prev,
      { prevUnits: 0, latestUnits: 0, totalUnits: 0, ratio: 0, bill: 0 },
    ]);
  }

  function handleRemove() {
    setCustomer((prev) => [...prev.slice(0, prev.length - 1)]);
  }

  function handlePastChange(index, value) {
    setCustomer((prev) => {
      const updatedCust = [...prev];
      if (value >= 0) {
        updatedCust[index].prevUnits = parseInt(value);
      }
      calculateTotalUnitUsed(index);
      handlecalculate();

      return updatedCust;
    });
  }

  function handleLatestChange(index, value) {
    setCustomer((prev) => {
      const updatedCust = [...prev];
      if (value >= 0) {
        updatedCust[index].latestUnits = parseInt(value);
      }
      calculateTotalUnitUsed(index);
      handlecalculate();

      return updatedCust;
    });
  }

  function calculateRatio(index) {
    let allUnitsUsed = 0;
    customer.map((cust) => {
      allUnitsUsed = cust.totalUnits + allUnitsUsed;
    });

    setCustomer((prev) => {
      const updatedCustomer = [...prev];

      updatedCustomer[index].ratio =
        allUnitsUsed !== 0
          ? updatedCustomer[index].totalUnits / allUnitsUsed
          : 0;
      return updatedCustomer;
    });
  }

  function calculateTotalUnitUsed(index) {
    setCustomer((prev) => {
      const updatedCustomers = [...prev];
      const prevU = updatedCustomers[index].prevUnits;
      const latestU = updatedCustomers[index].latestUnits;

      if (prevU > latestU) {
        updatedCustomers[index].totalUnits = 0;
      } else {
        updatedCustomers[index].totalUnits = latestU - prevU;
      }

      return updatedCustomers;
    });
  }

  function handlecalculate() {
    customer.map((customer, index) => {
      calculateRatio(index);
      setCustomer((prev) => {
        const updatedCustomer = [...prev];
        updatedCustomer[index].bill = (
          updatedCustomer[index].ratio * totalBill
        ).toFixed(2);
        return updatedCustomer;
      });
    });
  }

  return (
    <div className="p-1 bg-black">
      <h1 className="uppercase text-center p-2 bg-blue-950 text-white mx-2 ">
        Add customer Unit Details:
      </h1>
      <div className="text-white m-4 rounded-xl p-2 ">
        <div className="grid grid-cols-3 text-gray-600 text-center bg-gray-900 p-2 rounded pb-2">
          <h1 className="text-gray-500">Name</h1>
          <h1 className="text-gray-500">Previous units</h1>
          <h1 className="text-gray-500">Latest units</h1>
        </div>

        {customer.map((customer, i) => (
          <div
            key={i}
            className="grid items-center grid-cols-3 p-1 gap-2 my-1 text-center bg-gray-900 rounded"
          >
            <h1>Customer {i + 1} </h1>
            <input
              onChange={(e) => handlePastChange(i, e.target.value)}
              value={customer.prevUnits || ""}
              name="lastMonth"
              className="border border-gray-500 bg-black  p-1 text-center w-32 mx-auto rounded-md"
              type="number"
            />
            <input
              min={customer.prevUnits}
              autoCorrect="true"
              onChange={(e) => handleLatestChange(i, e.target.value)}
              value={customer.latestUnits || ""}
              name="thisMonth"
              className="border border-gray-500 bg-black  p-1 text-center w-32 mx-auto rounded-md"
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
          Add
        </button>
        <button
          onClick={handleRemove}
          className="text-white border p-2 bg-red-700 hover:bg-red-800 rounded w-20"
        >
          Remove
        </button>
        <button
          onClick={handlecalculate}
          className="text-white border p-2 bg-blue-700 hover:bg-blue-800 rounded w-20"
        >
          Calculate
        </button>
      </div>
      <div className="text-white  m-2  ">
        <h1 className="uppercase text-center p-2 bg-blue-950">
          Calculated Bill
        </h1>
        <div className="text-white mt-2 m-2 rounded-xl   p-2">
          <div className="grid grid-cols-3 text-gray-600 text-center bg-gray-900 p-2 rounded pb-2">
            <h1>Name </h1>
            <h1>Total Unit</h1>
            <h1>Total Bill</h1>
          </div>

          {customer?.map((customer, index) => (
            <div
              key={index}
              className="grid grid-cols-3 p-2 my-1 text-center bg-gray-900 rounded"
            >
              <h1>Customer {index + 1} </h1>
              <p>{customer.totalUnits}</p>
              <p>{customer.bill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FillRecord;
