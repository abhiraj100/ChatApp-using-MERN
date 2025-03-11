import React, { useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function Logout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`/api/user/logout`);
      localStorage.removeItem("messanger");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logout Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" bg-slate-950 text-white w-[4%] flex flex-col justify-end pb-4 ">
      <div className="p-3">
        <form action="">
          <div className="flex space-x-3">
            <button>
              <RiLogoutCircleLine
                className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300"
                onClick={handleLogout}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Logout;
