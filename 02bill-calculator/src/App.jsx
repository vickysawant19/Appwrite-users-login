// import Customer from "./components/Customer";
import { useState } from "react";
import FillRecord from "./components/FillRecord";
import MeterUnits from "./components/MeterUnits";
import Navbar from "./components/Navbar";

function App() {
  const [totalBill, setTotalBill] = useState(0);
  return (
    <>
      <div className="bg-[#262626] w-full min-h-full">
        <div className=" dark:bg-black h-screen max-h-full max-w-screen-sm mx-auto ">
          <Navbar />
          <MeterUnits totalBill={totalBill} setTotalBill={setTotalBill} />
          <FillRecord totalBill={totalBill} setTotalBill={setTotalBill} />
          {/* <Customer /> */}
        </div>
      </div>
    </>
  );
}

export default App;
