import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
const Dashboard = () => {
  return(
  <>
    <Header/>
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  </>
  );
};
export default Dashboard;