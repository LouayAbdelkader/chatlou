import React, { useState } from 'react';
import louay from '../Louay.jpg';

export default function UserList({ onUserClick }) {
    const userList = [
        { id: 1, name: `Walid`, icon: 'bi bi-patch-check-fill', status: 'online' },
        { id: 2, name: 'Rou', icon: 'bi bi-patch-check-fill', status: 'offline' },
        { id: 3, name: 'Rayen', icon: 'bi bi-patch-check-fill', status: 'online' },
        { id: 4, name: 'Amine', icon: 'bi bi-patch-check-fill', status: 'offline' },
        { id: 5, name: 'Dhouha', icon: 'bi bi-patch-check-fill', status: 'offline' },
        { id: 6, name: 'Eya', icon: 'bi bi-patch-check-fill', status: 'online' },


    ];

    const [searchQuery, setSearchQuery] = useState('');

    const filteredUsers = userList.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="list-person-container">
            <div className="ChatHeader">
                <h2>Users</h2>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    @louu
                    <i className="bi bi-patch-check-fill"></i>
                    <div className="user-avatar">
                        <img src={louay} alt="Louay" />
                    </div>
                </div>
            </div>
            <div className="search-bar">
                <div className="search-input-container">
                    <input
                        type="text"
                        placeholder="Search for users..."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <i className="bi bi-search search-icon"></i>
                </div>
            </div>
            <ul>
                {filteredUsers.map((user) => (
                    <li
                        key={user.id}
                        className={`user-item ${user.status}`}
                        onClick={() =>
                            onUserClick(user.name, user.icon, user.status)
                        }
                    >
                        <div className="user-avatar">{user.name.charAt(0)}</div>
                        <div className="user-info">
                            <span className="user-name">
                                {user.name}{' '}
                                {user.icon && (
                                    <i className={`bi ${user.icon}`}></i>
                                )}
                            </span>
                            <span className="user-status">
                                {user.status === 'online' ? 'Online' : 'Offline'}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
