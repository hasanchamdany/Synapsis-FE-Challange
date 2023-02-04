import React from "react";
import { Transition } from "@headlessui/react";

const Loading = ({ when = false, text = "Loadinhg" }) => {
  return (
    <Transition
      show={when}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="relative block z-[1000]"
    >
      <div className="fixed top-0 left-0 z-[1000] flex h-screen w-screen flex-col items-center justify-center gap-10 bg-white/100">
        <div class="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
          <div class="h-9 w-9 rounded-full bg-white"></div>
        </div>
        <h1>{text}</h1>
      </div>
    </Transition>
  );
};

export default Loading;
