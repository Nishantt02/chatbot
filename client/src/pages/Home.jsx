import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "../components/Header";
import { ChatData } from "../context/ChatContext";
import { CgProfile } from "react-icons/cg";
import { FaRobot } from "react-icons/fa";
import { LoadingBig, LoadingSmall } from "../components/Loading";
import { IoMdSend } from "react-icons/io";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const {
    fetchResponse,
    messages,
    prompt,
    setPrompt,
    newRequestLoading,
    loading,
    chats,
  } = ChatData();

  const submitHandler = (e) => {
    e.preventDefault();
    fetchResponse();
  };

  const messagecontainerRef = useRef(null);

  // ✅ ALWAYS convert to safe arrays
  const safeMessages = Array.isArray(messages) ? messages : [];
  const safeChats = Array.isArray(chats) ? chats : [];

  useEffect(() => {
    if (messagecontainerRef.current) {
      messagecontainerRef.current.scrollTo({
        top: messagecontainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [safeMessages]);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 flex-col">
        {/* Mobile Menu */}
        <button
          onClick={toggleSidebar}
          className="md:hidden p-4 bg-gray-800 text-2xl"
        >
          <GiHamburgerMenu />
        </button>

        <div className="flex-1 p-6 mb-20 md:mb-0">
          <Header />

          {loading ? (
            <LoadingBig />
          ) : (
            <div
              className="flex-1 p-6 max-h-[600px] overflow-y-auto mb-20 md:mb-0 thin-scrollbar"
              ref={messagecontainerRef}
            >
              {safeMessages.length > 0 ? (
                safeMessages.map((msg, i) => (
                  <div key={i}>
                    {/* User Message */}
                    <div className="mb-4 p-4 rounded bg-blue-700 text-white flex gap-2">
                      <div className="bg-white p-2 rounded-full text-black text-2xl h-10">
                        <CgProfile />
                      </div>
                      <p>{msg?.question || ""}</p>
                    </div>

                    {/* Bot Message */}
                    <div className="mb-4 p-4 rounded bg-gray-700 text-white flex gap-2">
                      <div className="bg-white p-2 rounded-full text-black text-2xl h-10">
                        <FaRobot />
                      </div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: msg?.answer || "",
                        }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No chat yet</p>
              )}

              {newRequestLoading && <LoadingSmall />}
            </div>
          )}
        </div>
      </div>

      {/* Input box only when chats exist */}
      {safeChats.length > 0 && (
        <div className="fixed bottom-0 right-0 left-auto p-4 bg-gray-900 w-full md:w-[75%]">
          <form
            onSubmit={submitHandler}
            className="flex justify-center items-center"
          >
            <input
              className="flex-grow p-4 bg-gray-700 rounded-l text-white outline-none"
              type="text"
              placeholder="Enter a prompt here"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required
            />
            <button
              type="submit"
              className="p-4 bg-gray-700 rounded-r text-2xl text-white"
            >
              <IoMdSend />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;

