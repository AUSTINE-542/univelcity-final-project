import React from 'react';
// import logo from './logo.svg';
   import {FaServer,FaShoppingCart,FaFileAlt,FaDatabase,FaRegEdit,FaPhoneSquareAlt,FaTools,FaInfo,FaPowerOff, FaRegSun,FaTimesCircle,FaUserTie,FaTh,FaSellsy,FaEuroSign,FaRegWindowRestore} from "react-icons/fa";

import './App.css';

function App() {
  return (
    <div>
      <header>
        <button><p> <FaShoppingCart/>POS</p></button>
        <button><p> <FaFileAlt/>SALES</p></button>
        <button><p> <FaServer/>STOCK</p></button>
        <button><p> <FaDatabase/>ACCOUNT</p></button>
        <button><p> <FaRegEdit/>DIARY</p></button>
        <button><p> <FaPhoneSquareAlt/>TELEPHONE</p></button>
        <button><p> <FaTools/>MAINTAINANCE</p></button>
        <button><p> <FaInfo/>ABOUT</p></button>
        {/* <button><p>POS MENU</p></button> */}
        <button><p> <FaPowerOff/>EXIT</p></button>
      </header>
      <div className="side">
        <div className="side-content">
          <p>POS MENU</p>
        </div>
      </div>
      <div className="main">
        <div className="main-content">
          {/* <p>POS MENU</p> */}
          <div className="sideA">
            <div className="sideA-content">
              <h2>POS Menu</h2>
              <div className="circle">
                <p><FaShoppingCart/>Point Of Sales</p>
              </div>
              <div className="circle">
                <p> <FaRegSun/>Cash Drawer Reconciliation</p>
              </div>
              <div className="circle">
              <p> <FaTimesCircle/>Close (Esc)</p>
              </div>
            </div>
          </div>
          <div className="sideB">
            <div className="sideB-content">
              {/* <h2>POS Reports</h2> */}
              <div className="sideC">
                <div className="sideC-content">
                <h2>POS Reports</h2>
                  <div className="circle">
                   <p> <FaFileAlt/>1.Summary Income Report</p>
                  </div>
                  <div className="circle">
                    <p> <FaRegWindowRestore/>2.Daily Sales Report</p>
                  </div>
                  <div className="circle">
                    <p> <FaUserTie/>3.Staff Sales Report</p>
                  </div>
                </div>
              </div>
              <div className="sideD">
                <div className="sideD-content">
                  <div className="circle">
                    <p> <FaTh/>4.Groups Sales Reports</p>
                  </div>
                  <div className="circle">
                    <p> <FaSellsy/>5.Sales Analysis Reports</p>
                  </div>
                  <div className="circle">
                    <p> <FaEuroSign/>6.Multi-Currency Reports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
     </div>
  );
}

export default App;
