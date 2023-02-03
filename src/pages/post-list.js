import React from "react";
import DefaultLayout from "@/components/DefaultLayout/DefaultLayout";
import PostCard from "@/components/Card/PostCard";

import useSWR from "swr";
import axios from "axios";
import { fetcher } from "./../hooks/fetcher";

const Post_List = () => {
  const { data, error, isLoading } = useSWR(
    "https://gorest.co.in/public/v2/posts",
    fetcher
  );

  console.log(data);
  return (
    <DefaultLayout>
      <div className="w-full min-h-screen bg-gradient-to-b from-purple-500 to-pink-500">
        <div className="flex justify-center pt-40">
          <div className="block">
            {data?.map((post) => {
              // console.log(post);
              return (
                <PostCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  user={post.user_id}
                  body={post.body}
                />
              );
            })}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Post_List;
