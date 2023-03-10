import React, { useState } from "react";
import DefaultLayout from "@/components/DefaultLayout/DefaultLayout";
import UserTable from "@/components/Table/UserTable";
import AddUserModal from "@/components/Modal/AddUserModal";
import Image from "next/image";
import { useRouter } from "next/router";

import SearchIcon from "../../public/images/icons/icons8-search-49.png";

const User_Dashboard = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [inputs, setInputs] = useState({});
  const router = useRouter();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("ini isi input item");
    // console.log(inputs.search);
  };

  return (
    <DefaultLayout>
      <div className="w-full min-h-screen xl:pt-36 pt-20 bg-gradient-to-b from-blue-500 to-cyan-500">
        <div className="mb-4">
          <h1 className="flex justify-center  text-4xl font-bold text-white decoration-gray-400">
            {" "}
            User Dashboard
          </h1>
          <div className="container  max-w-7xl flex justify-between pt-4 mx-auto">
            <div className=" ml-4 rounded-xl">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="search"
                  placeholder="Search User"
                  value={inputs.search || ""}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-xl hover:outline hover:outline-2 hover:outline-yellow-500"
                />
              </form>
            </div>
            <div className="">
              <button
                className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-100 hover:text-black"
                onClick={() => setShowAddModal(true)}
              >
                Create User
              </button>
            </div>
          </div>
        </div>
        <AddUserModal state={showAddModal} setState={setShowAddModal} />

        <UserTable search={inputs.search} />
      </div>
    </DefaultLayout>
  );
};

export default User_Dashboard;
