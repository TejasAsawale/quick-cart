import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div>
      <h3 className="mb-4">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3 ">
          <div>
            <p className="">Total sells</p>
            <h4 className="mb-0">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green"><BsArrowUpRight/> 32%</h6>
            <p className="mb-0">Compared to March 2024</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3 ">
          <div>
            <p className="">Average order value</p>
            <h4 className="mb-0">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green"><BsArrowUpRight/> 32%</h6>
            <p className="mb-0">Compared to March 2024</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3 ">
          <div>
            <p className="">Total Orders</p>
            <h4 className="mb-0">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red"><BsArrowDownRight/> 32%</h6>
            <p className="mb-0">Comared to March 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
