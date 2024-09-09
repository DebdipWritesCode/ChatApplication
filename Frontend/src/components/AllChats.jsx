import { useEffect, useRef, useState } from "react";
import { socket } from "../services/socket";
import { fetchMessages } from "../services/api";

const AllChats = ({ username }) => {
  const [messages, setMessages] = useState([]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const storedMessages = await fetchMessages();
        setMessages(storedMessages.reverse());
      }
      catch (err) {
        console.error(err);
      }
    };

    getMessages();
  }, []);

  useEffect(() => {
    socket.on("chat message", ({ content, sender }) => {
      setMessages((prevMessages) => [...prevMessages, { content, sender }]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages])

  return (
<div className="bg-white p-6 rounded-lg shadow-md h-96 overflow-y-auto mb-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Welcome {username}!</h2>
      <ul className="space-y-3">
        {messages.map((msg, index) => (
          <li key={index} className={`flex ${msg.sender === username ? 'justify-end' : 'justify-start'}`}>
            <div className={`${msg.sender === username ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'} p-3 rounded-lg max-w-xs shadow`}>
              <strong>{msg.sender}:</strong> {msg.content}
            </div>
          </li>
        ))}
        <div ref={chatEndRef} />
      </ul>
    </div>
  );
};

export default AllChats;
