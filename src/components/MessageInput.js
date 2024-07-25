import React, { useState } from 'react';

function MessageInput({ sendMessage }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    const message = {
      text: input,
      timestamp: new Date().toLocaleTimeString(),
    };
    sendMessage(message);
    setInput('');
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default MessageInput;
