import React from "react";

const Message = ({ message }) => {
  const authUser = JSON.parse(localStorage.getItem("messanger"));
  // console.log(message);
  // console.log(authUser);

  if (!authUser || !authUser.user) {
    return null; // Prevents errors if user is not logged in
  }

  const itsMe = message?.senderID === authUser?.user._id;

  const chatName = itsMe ? " chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-blue-500" : "bg-gray-200 text-black";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // const
  return (
    <>
      <div>
        <div className="p-4">
          <div className={`chat ${chatName}`}>
            <div className={`chat-bubble text-white ${chatColor}`}>
              {message.message}
            </div>
            <div className=" chat-footer text-xs text-gray-500">
              {formattedTime}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
