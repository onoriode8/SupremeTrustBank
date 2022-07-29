import React from 'react';

export const AuthContext = React.createContext({
    isLoadedIn: false,
    login: () => {},
    logout: () => {}
});