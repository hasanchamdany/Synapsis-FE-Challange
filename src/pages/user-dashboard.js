import React, { useState } from "react";
import DefaultLayout from "@/components/DefaultLayout/DefaultLayout";
import UserTable from "@/components/Table/UserTable";
import AddUserModal from "@/components/Modal/AddUserModal";

import SuccessToast from "../components/Toast/SuccessToast.jsx";

const User_Dashboard = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <DefaultLayout>
      <div className="w-full min-h-screen xl:pt-36 pt-20 bg-gradient-to-b from-blue-500 to-cyan-500">
        <div className="mb-4">
          <h1 className="flex justify-center  text-4xl font-bold text-white decoration-gray-400">
            {" "}
            User Dashboard
          </h1>
          <div className="container flex justify-end pt-4">
            <button
              className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-sky-600"
              onClick={() => setShowAddModal(true)}
            >
              Create User
            </button>
          </div>
        </div>
        <AddUserModal state={showAddModal} setState={setShowAddModal} />

        <UserTable />
      </div>
    </DefaultLayout>
  );
};

export default User_Dashboard;
