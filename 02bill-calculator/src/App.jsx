// import Customer from "./components/Customer";
import { useState } from "react";
import FillRecord from "./components/FillRecord";
import MeterUnits from "./components/MeterUnits";
import Navbar from "./components/Navbar";

function App() {
  const [totalBill, setTotalBill] = useState(0);
  return (
    <>
      <div className=" dark:bg-black w-full h-screen">
        <Navbar />
        <MeterUnits totalBill={totalBill} setTotalBill={setTotalBill} />
        <FillRecord totalBill={totalBill} setTotalBill={setTotalBill} />
        {/* <Customer /> */}
      </div>
    </>
  );
}

export default App;
