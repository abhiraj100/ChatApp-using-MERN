import React from "react";
import Search from "./Search";
import Users from "./Users";

const Left = () => {
  return (
    <>
      <div className=" bg-black text-white w-[30%] ">
        <h1 className="font-bold text-3xl p-2 px-11">Chats</h1>
        <Search />
        <hr />
        <Users />
      </div>
    </>
  );
};

export default Left;
