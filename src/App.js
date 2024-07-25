import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

const socket = io('http://localhost:4000'); // Replace with your server URL

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = (message) => {
    socket.emit('message', message);
  };

  return (
    <div className="App">
      <ChatWindow messages={messages} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;
