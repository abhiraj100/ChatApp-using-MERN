import React from "react";
import { IoIosSend } from "react-icons/io";

const Type = () => {
  return (
    <>
      <div className="flex space-x-3 h-[10vh]  text-center bg-gray-900 hover:bg-gray-600 duration-300">
        <div className="w-[70%] mx-4">
          <input
            type="text"
            placeholder="Type here"
            className="border-[1px] border-gray-700 rounded-xl items-center px-3 py-3 mt-1 w-full  grow outline-none bg-slate-900 "
          />
        </div>
        <button className="text-3xl">
          <IoIosSend />
        </button>
      </div>
    </>
  );
};

export default Type;
