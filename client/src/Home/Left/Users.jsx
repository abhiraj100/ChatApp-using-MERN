import React from "react";
import User from "../User";

function Users() {
  return (
    <div
      style={{ maxHeight: "calc(84vh - 1vh)" }}
      className="hide-scrollbar overflow-y-auto py-1"
    >
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </div>
  );
}

export default Users;
