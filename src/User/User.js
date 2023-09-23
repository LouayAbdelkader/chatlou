import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../Auth.js';
import React, { useState } from 'react';
import UserList from './UserList.js';
import '../App.css';
import { format } from 'date-fns';

export default function User() {
    const navigate = useNavigate();

    function handleSignOut() {
        signOut(auth)
            .then(() => {
                console.log('User signed out successfully.');
                navigate('/');
            })
            .catch((error) => {
                console.error('Sign-out error:', error);
            });
    }

    const [userMessages, setUserMessages] = useState({});

    const [newMessage, setNewMessage] = useState('');

    const generateTimestamp = () => {
        return format(new Date(), 'HH:mm'); // Customize the timestamp format as needed
    };

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

        const timestamp = generateTimestamp(); // Generate the timestamp for the current message
        const newMessageObject = { content: newMessage, timestamp };

        setUserMessages((prevUserMessages) => ({
            ...prevUserMessages,
            [user]: [...(prevUserMessages[user] || []), newMessageObject],
        }));

        setNewMessage('');
    };

    const [user, setUser] = useState(null);
    const [icon, setIcon] = useState(null);
    const [status, setStatus] = useState(null);
    const handleUserClick = (userName, userIcon, userState) => {
        setUser(userName);
        setIcon(userIcon);
        setStatus(userState);
    };

    const messagesForUser = userMessages[user] || [];

    return (
        <div>
            <div className="chat-app">
                <div className="chat-list">
                    <UserList onUserClick={handleUserClick} />
                    <button
                        type="button"
                        className="sign"
                        style={{ position: 'fixed', bottom: '2vh', left: '5vh', width: '20%' }}
                        onClick={handleSignOut}
                    >
                        <i className="bi bi-box-arrow-left"></i> Sign Out
                    </button>
                </div>
                <div className="chat-window">
                    <div className="messages">
                        {user && (
                            <div className="ChatHeadeer">
                                <p>
                                    Chatting with: {user} <i className={icon}></i>
                                </p>
                                <p>Status: {status}</p>
                                <p>
                                    <i class="bi bi-list"></i>
                                </p>
                            </div>
                        )}

                        {messagesForUser.map((message, index) => (
                            <div key={index} className="messageContainer">
                                <span>{message.content}</span>
                                <span className="time">{message.timestamp}</span>
                            </div>
                        ))}
                    </div>
                    <div className="message-input">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
