import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './Chat.css';

const socket = io('http://127.0.0.1:5000');

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => socket.off('message');
    }, []);

    const sendMessage = () => {
        if (message.trim()) {
            socket.send(message);
            setMessage('');
        }
    };

    return (
        <div className="chat-container">
            <div className="messages-container">
                {messages.map((msg, index) => (
                    <div key={index} className="message">{msg}</div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    className="input-field"
                    placeholder="Type your message..."
                />
                <button onClick={sendMessage} className="send-button">Send</button>
            </div>
        </div>
    );
};

export default Chat;
