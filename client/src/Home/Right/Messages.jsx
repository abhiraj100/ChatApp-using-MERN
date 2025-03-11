import React from "react";
import Message from "./Message";
import Loading from "../../components/Loading.jsx";
import useGetMessage from "../../context/useGetMessage.js";

function Messages() {
  const { loading, messages } = useGetMessage();
  console.log(messages);
  return (
    <>
      <div
        className="flex-1 overflow-y-auto"
        style={{ minHeight: "calc(92vh - 8vh)" }}
      >
        {loading ? (
          <Loading />
        ) : (
          messages.length > 0 &&
          messages.map((message) => (
            <div key={message._id}>
              <Message message={message} />
            </div>
          ))
        )}

        {!loading && messages.length === 0 && (
          <div className="bg-[url('./whats.jpeg')] bg-contain w-full h-[500px]">
            <p className="text-center text-xl py-[25%] ">
              Say! Hi to start the conversation..
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Messages;
