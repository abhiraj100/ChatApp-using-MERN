import React from "react";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import Type from "./Type";

const Right = () => {
  return (
    <div className=" bg-slate-950 text-white w-[70%] ">
      <ChatUser />
      <div
        className="hide-scrollbar overflow-y-auto py-1"
        style={{ maxHeight: "calc(88vh - 10vh)" }}
      >
        <Messages />
      </div>
      <Type />
    </div>
  );
};

export default Right;
