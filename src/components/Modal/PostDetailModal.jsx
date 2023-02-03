import React, { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";
import { fetcher } from "@/hooks/fetcher";

import CommentCard from "../Card/CommentCard.jsx";

const PostDetailModal = (props) => {
  const { state, setState } = props;
  const [user, setUser] = useState("");
  const [comment, setComment] = useState([]);
  console.log(props.data);
  //   const url =
  //     "https://gorest.co.in/public/v2/posts/" + props.data.id + "/comments";

  //   const { data, error, isLoading } = useSWR(url, fetcher);
  //   console.log("ini data swr");
  //   console.log(data);
  useEffect(() => {
    try {
      const token = process.env.NEXT_PUBLIC_TOKEN;

      const res = axios
        .get("https://gorest.co.in/public/v2/users/" + props.data.user, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(function (response) {
          //   console.log(response);
          setUser(response.data.name);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      {/* {findUser(url)} */}
      {/* {console.log(user)} */}
      {state && (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-3xl relative flex flex-col w-full bg-[#FAFAFA] outline-none focus:outline-none">
                {/*header*/}
                <div className="max-w-[800px] ">
                  <div className="mt-4 mb-6 align-center mx-auto">
                    <h1 className="text-center font-bold text-xl">
                      POST DETAIL
                    </h1>

                    <div className=" mx-6 pt-4 text-xl font-bold">
                      {props.data.title}
                    </div>
                    <div className=" mx-6 py-1">{user || "undefined"}</div>
                    <div className=" mx-6 pb-1 py-1 text-md">
                      {props.data.body}
                    </div>
                    <div>
                      <h1 className="text-center font-bold text-xl mb-3">
                        Comment
                      </h1>
                      {console.log(props.data.id)}
                      <CommentCard postId={props.data.id} />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="flex outline outline-2 outline-red-700 mx-1 mr-6 mt-3 px-4 py-1 w-fit bg-red-700 text-white rounded-[10px]"
                        onClick={() => setState(false)}
                      >
                        <p className="my-auto">Close</p>
                      </button>
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

export default PostDetailModal;
