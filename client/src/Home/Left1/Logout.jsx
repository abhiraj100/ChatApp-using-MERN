import React from "react";
import { RiLogoutCircleLine } from "react-icons/ri";

function Logout() {
  return (
    <div className=" bg-slate-950 text-white w-[4%] flex flex-col justify-end pb-4 ">
      
      <div className="p-3">
        <form action="">
          <div className="flex space-x-3">
            <button>
              <RiLogoutCircleLine className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Logout;
