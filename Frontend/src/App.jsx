import { useState } from "react";
import AllChats from "./components/AllChats";
import ChatForm from "./components/ChatForm";

const App = () => {
  const [username, setUsername] = useState("");
  const [isUsernameSet, setIsUsernameSet] = useState(false);

  const handleSetUsername = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setIsUsernameSet(true);
    }
  };

  if (!isUsernameSet) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center">Enter your name to join the chat</h2>
          <form onSubmit={handleSetUsername} className="flex flex-col">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your name"
              className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
            >
              Join Chat
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-2xl">
        <AllChats username={username} />
        <ChatForm username={username} />
      </div>
    </div>
  );
};

export default App;
