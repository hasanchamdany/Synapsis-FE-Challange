import React from "react";
import axios from "axios";
const token = process.env.NEXT_PUBLIC_TOKEN

export const fetcher = (url) =>
  axios
    .get(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);
