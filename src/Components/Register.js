// pages/index.js
import React, { useEffect, useState } from 'react';
import connectDB from '../db/connect';
import User from '../models/User';

connectDB();

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await User.find({});
                setUsers(users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <p>Name: {user.name}</p>
                        <p>Age: {user.age}</p>
                        <p>Email: {user.email}</p>
                        <p>Address: {user.address.street}, {user.address.city}, {user.address.state}, {user.address.zip}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
