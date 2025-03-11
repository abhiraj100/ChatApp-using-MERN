import React from "react";
import User from "./User";
import userGetAllUsers from "../../context/userGetAllUsers";

const Users = () => {
  const [allUsers, loading] = userGetAllUsers();
  console.log(allUsers);
  return (
    <div>
      <h1 className="px-8 py-2 text-center text-white font-semibold bg-slate-800 rounded-md">
        Messages
      </h1>
      <div
        style={{ maxHeight: "calc(84vh - 1vh)" }}
        className="hide-scrollbar overflow-y-auto py-1"
      >
        {/* {Array.isArray(allUsers) ? (
        allUsers.map((user, index) => <User key={index} user={user} />)
      ) : (
        <p>No users found</p>
      )} */}

        {allUsers.map((user, index) => {
          return <User key={index} user={user} />;
        })}
      </div>
    </div>
  );
};

export default Users;
