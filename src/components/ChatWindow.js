import React from 'react';
import PreviewComponent from './PreviewComponent';
import './ChatWindow.css'; // Add styling as needed

function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <div key={index} className="message">
          <PreviewComponent content={msg.content} />
          <div className="message-content">
            {msg.text}
          </div>
          <div className="timestamp">{msg.timestamp}</div>
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;
