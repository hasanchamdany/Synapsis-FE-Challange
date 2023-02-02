import React, { useState } from "react";
import axios from "axios";
import { Transition } from "@headlessui/react";
import { Toaster, ToastIcon, toast, resolveValue } from "react-hot-toast";

import SuccessToast from "../Toast/SuccessToast";

const token = process.env.NEXT_PUBLIC_TOKEN;

const EditUserModal = (props) => {
  const { state, setState } = props;
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    console.log(props.data.id);
    axios
      .put("https://gorest.co.in/public/v2/users/" + props.data.id, inputs, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(toast.success("Success add Data"))
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      {state && (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#FAFAFA] outline-none focus:outline-none">
                {/*header*/}
                <div className="w-[400px] flex">
                  <div className="mt-4 mb-6 align-center mx-auto">
                    <h1 className="text-center font-bold text-xl">EDIT USER</h1>
                    <form onSubmit={handleSubmit} className="block ">
                      <input
                        name="name"
                        required
                        placeholder="Name"
                        type="text"
                        value={inputs.name || ""}
                        onChange={handleChange}
                        className=" block outline outline-2 outline-blue-dark mx-1 mt-4 px-2 py-1 w-[232px] rounded-[10px] text-black"
                      />

                      <input
                        name="email"
                        required
                        placeholder="Email"
                        type="text"
                        value={inputs.email || ""}
                        onChange={handleChange}
                        className=" block outline outline-2 outline-blue-dark mx-1 mt-4 px-2 py-1 w-[232px] rounded-[10px] text-black"
                      />

                      <input
                        name="gender"
                        required
                        placeholder="Gender"
                        type="text"
                        value={inputs.gender || ""}
                        onChange={handleChange}
                        className=" block outline outline-2 outline-blue-dark mx-1 mt-4 px-2 py-1 w-[232px] rounded-[10px] text-black"
                      />

                      <input
                        name="status"
                        required
                        placeholder="Status"
                        type="text"
                        value={inputs.status || ""}
                        onChange={handleChange}
                        className=" block outline outline-2 outline-blue-dark mx-1 mt-4 px-2 py-1 w-[232px] rounded-[10px] text-black"
                      />

                      <div className="flex justify-between">
                        <button
                          type="submit"
                          className="flex outline outline-2 outline-red-700 mx-1 mt-6 px-4 py-1 w-fit bg-red-700 text-white rounded-[10px]"
                          onClick={() => setState(false)}
                        >
                          <p className="my-auto">Close</p>
                        </button>
                        <button
                          type="submit"
                          className="flex justify-center outline outline-2 outline-green-700 bg-green-700 mx-1 mt-6 px-3 py-2 w-fit bg-blue-dark text-white rounded-[10px]"
                          onClick={handleSubmit}
                        >
                          <p className="mr-1"> Edit Data</p>
                        </button>
                        <SuccessToast />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-100 bg-black"></div>
        </div>
      )}
    </>
  );
};

export default EditUserModal;
