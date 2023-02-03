import React, { useState } from "react";
import axios from "axios";
import PostDetailModal from "../Modal/PostDetailModal";

const token = process.env.NEXT_PUBLIC_TOKEN;

const PostCard = (props) => {
  const [user, setUser] = useState("");
  const [showDetailModal, setShowDetailModal] = useState(false);
  // console.log("ini dari postcard");
  // console.log(props);

  return (
    <div className="md:w-[800px] h-fit bg-white rounded-[30px] my-2">
      <div className=" mx-6 pt-4 text-xl font-bold">{props.title}</div>
      <div className=" mx-6 py-1">{user || "--------------------"}</div>
      <div className=" mx-6 pb-1 py-1 text-md">{props.body}</div>
      <div className="mx-6 pb-4 py-1 flex justify-end">
        <button
          className="bg-green-600 text-white px-2 py-1 rounded-xl"
          onClick={() => setShowDetailModal(true)}
        >
          Show Detail
        </button>
        <PostDetailModal
          state={showDetailModal}
          setState={setShowDetailModal}
          data={props}
        />
      </div>
    </div>
  );
};

export default PostCard;
