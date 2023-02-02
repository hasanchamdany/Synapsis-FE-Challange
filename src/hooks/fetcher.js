import React from "react";
import axios from "axios";
const token = process.env.NEXT_PUBLIC_TOKEN;
// console.log(token);

export const fetcher = (url) =>
  axios
    .get(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);
