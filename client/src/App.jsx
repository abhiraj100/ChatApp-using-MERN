import React from "react";
import Left from "./Home/Left/Left";
import Right from "./Home/Right/Right";
import Logout from "./Home/Left1/Logout";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      {/* <div className="flex min-h-screen">
        <Logout />
        <Left />
        <Right />
      </div> */}
      <Signup />
      {/* <Login /> */}
    </>
  );
};

export default App;
