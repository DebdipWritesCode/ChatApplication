import { useState } from "react";
import { socket } from "../services/socket";

const ChatForm = ({ username }) => {
  const [input, setInput] = useState("");
  const sender = "Anonymous";

  const sendMessage = (e) => {
    e.preventDefault();

    socket.emit("chat message", { msg: input, sender: username });
    setInput("");
  };

  return (
    <form onSubmit={sendMessage} className="flex items-center space-x-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition"
      >
        Send
      </button>
    </form>
  );
};

export default ChatForm;
