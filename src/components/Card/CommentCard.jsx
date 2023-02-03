import React, { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";
import { fetcher } from "@/hooks/fetcher";

const CommentCard = (props) => {
  const [post, setPost] = useState();
  console.log(props.postId);
  useEffect(() => {
    try {
      const token = process.env.NEXT_PUBLIC_TOKEN;

      const res = axios
        .get(
          "https://gorest.co.in/public/v2/posts/" + props.postId + "/comments",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then(function (response) {
          //   console.log("ini isis response di comment");
          //   console.log(response.data);
          setPost(response.data);
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
      {post?.map((data) => {
        return (
          <div
            className="flex justify-between py-2 mt-2 mx-4 bg-white shadow-md rounded-xl"
            key={data.id}
          >
            <div className="block ml-8">
              {console.log(data.name)}
              {console.log("atas ini adalah data post")}
              <div className="">{data.name} test</div>
              <div className="">{data.email}</div>
            </div>
            <div className="mr-8">{data.body}</div>
          </div>
        );
      })}
    </>
  );
};

export default CommentCard;
