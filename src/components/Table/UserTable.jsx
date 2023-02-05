import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Toaster, ToastIcon, toast, resolveValue } from "react-hot-toast";

import SuccessToast from "../Toast/SuccessToast";

import useSWR from "swr";
import { fetcher } from "../../hooks/fetcher";

import EditUserModal from "../Modal/EditUserModal";
import DeleteUserModal from "../Modal/DeleteUserModal";
import Loading from "../Loading/Loading";

const UserTable = (props) => {
  let search = props.search;

  const { data, error, isLoading } = useSWR(
    "https://gorest.co.in/public/v2/users?page=1&per_page=15",
    fetcher,
    { refreshInterval: 1000 }
  );

  //   const [value, setValue] = useState(data);
  //   console.log("ini isi value");
  //   console.log(value);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [showToast, setShowToast] = useState(false);

  const [passData, setPassData] = useState();
  const onClickEdit = (data) => {
    setShowEditModal(true);
    setPassData(data);
    // console.log("ini pass data");
    // console.log(data);
  };
  const onClickDelete = (data) => {
    setShowDeleteModal(true);
    setPassData(data);
  };

  const [users, setUsers] = useState(data);
  useEffect(() => {
    setUsers(data);
    // console.log("ini users");
    // console.log(users);
  }, [data]);

  // useEffect(() => {
  //   console.log(showToast);
  //   if (showToast) {
  //     return toast.success("Success delete Data");
  //   } else {
  //     return;
  //   }
  // }, []);

  //   console.log(data);

  //   const res = data.filter((x) => x.some((y) => y.name === search));

  return (
    <>
      {console.log("ini users")}
      {console.log(users)}
      <div className="container max-w-7xl mx-auto ">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <Loading when={isLoading} text="getting your datas..." />
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      ID
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Username
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Email
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Gender
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Status
                    </th>
                    <th
                      className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50"
                      colspan="3"
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                {search ? (
                  <tbody className="bg-white">
                    {users
                      //   ?.filter((filtered) => console.log(filtered))
                      .map((datas) => {
                        if (datas.name.toLowerCase() === search.toLowerCase()) {
                          return (
                            <tr key={datas.id}>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="flex items-center">
                                  {datas.id}
                                </div>
                              </td>

                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-900">
                                  {datas.name}
                                </div>
                              </td>

                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p>{datas.email}</p>
                              </td>

                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p>{datas.gender}</p>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p>{datas.status}</p>
                              </td>

                              <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                                <button
                                  onClick={() => onClickEdit(datas)}
                                  className="text-indigo-600 hover:text-indigo-900"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    />
                                  </svg>
                                </button>
                              </td>

                              <td className="text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200 ">
                                <button onClick={() => onClickDelete(datas)}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-red-600 hover:text-red-800"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                  </svg>
                                </button>
                              </td>
                            </tr>
                          );
                        } else {
                          return null;
                        }
                      })}
                  </tbody>
                ) : (
                  <tbody className="bg-white">
                    {users?.map((datas) => {
                      //   console.log(datas);
                      return (
                        <tr key={datas.id}>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex items-center">{datas.id}</div>
                          </td>

                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 text-gray-900">
                              {datas.name}
                            </div>
                          </td>

                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p>{datas.email}</p>
                          </td>

                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p>{datas.gender}</p>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p>{datas.status}</p>
                          </td>

                          <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                            <button
                              onClick={() => onClickEdit(datas)}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                              </svg>
                            </button>
                          </td>

                          <td className="text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200 ">
                            <button onClick={() => onClickDelete(datas)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-red-600 hover:text-red-800"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                            <SuccessToast />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
      <EditUserModal
        state={showEditModal}
        setState={setShowEditModal}
        data={passData}
      />
      <DeleteUserModal
        state={showDeleteModal}
        setState={setShowDeleteModal}
        data={passData}
      />
    </>
  );
};

export default UserTable;
