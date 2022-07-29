import React from 'react';
import UserLists from '../components/UsersList';

const user = () => {
    const USERS = [
        {
            name: "Max",
            id: "u1",
            image: "https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
            place: 2
        }
    ];

    return (
        <header>
            <UserLists items={USERS} />
        </header>
    );
};

export default user;