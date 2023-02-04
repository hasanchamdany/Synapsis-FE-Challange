import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import DefaultLayout from "@/components/DefaultLayout/DefaultLayout";
import { TypeAnimation } from "react-type-animation";

import axios from "axios";
import useSWR from "swr";

import { fetcher } from "../hooks/fetcher";

import HomePageBanner from "../../public/images/home-gorest.png";

const inter = Inter({ subsets: ["latin"] });
const token = process.env.NEXT_PUBLIC_TOKEN;

// const fetcher =  (url) =>  axios(url).then(res => res.data).then(console.log("test fetcher index"))

// (url) => axios(url).then(r => r.data

export default function Home() {
  // console.log(token)
  // const { data, error, isLoading } = useSWR(
  //   "https://gorest.co.in/public/v2/users",
  //   fetcher
  // );
  // console.log(data);
  // fetcher
  return (
    <>
      <DefaultLayout>
        <div className="bg-gradient-to-b from-violet-500 to-fuchsia-500 w-full h-screen text-white">
          <div className="pt-40 flex justify-center items-center max-w-[832.84]">
            <Image
              src={HomePageBanner}
              width={832.84}
              height={520.99}
              alt="Home Banner"
            />
          </div>
          <div className="flex justify-center text-4xl mt-4">
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={["Gorest Public API", 3000]}
              speed={30} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: "1.5em" }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
