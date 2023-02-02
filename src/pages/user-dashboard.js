import React from "react";
import DefaultLayout from "@/components/DefaultLayout/DefaultLayout";
import UserTable from "@/components/Table/UserTable";

const User_Dashboard = () => {
  return (
    <DefaultLayout>
      <div className="w-full min-h-screen bg-gradient-to-b from-blue-500 to-cyan-500">
        <UserTable />
      </div>
    </DefaultLayout>
  );
};

export default User_Dashboard;
