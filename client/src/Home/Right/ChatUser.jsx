import React from "react";

function ChatUser() {
  return (
    <>
      <div className="h-[14vh] pt-5 pl-5 pb-3 flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300">
        <div>
          <div className="avatar online">
            <div className="w-14 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl">Abhiraj Yadav</h1>
          <span className="text-sm">Online</span>
        </div>
      </div>
    </>
  );
}

export default ChatUser;
