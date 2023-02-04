import React, { useState } from "react";
import axios from "axios";
import { Transition } from "@headlessui/react";
import { Toaster, ToastIcon, toast, resolveValue } from "react-hot-toast";

import SuccessToast from "../Toast/SuccessToast";

const token = process.env.NEXT_PUBLIC_TOKEN;

const DeleteUserModal = (props) => {
  //   console.log(token);
  const { state, setState } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .delete("https://gorest.co.in/public/v2/users/" + props.data.id, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(toast.success("Success delete Data"), setState(false))
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
                    <h1 className="text-center font-bold text-xl">
                      DELETE USER
                    </h1>

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
                        <p className="mr-1"> Delete Data</p>
                      </button>
                      <SuccessToast />
                    </div>
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

export default DeleteUserModal;
