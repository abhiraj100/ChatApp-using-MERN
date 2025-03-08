import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="h-[10vh] mb-2">
      <div className="px-6 py-4">
        <form action="">
          <div className="flex space-x-3">
            <label className="border-[1px] rounded-lg flex p-2 px-3 border-gray-700 bg-slate-900 items-center w-full gap-2 w-[80%]">
              <input
                type="text"
                className="grow outline-none bg-slate-900 "
                placeholder="Search"
              />
            </label>
            <button>
              <IoSearchSharp className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
