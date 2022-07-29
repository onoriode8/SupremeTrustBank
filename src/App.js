import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Users from './user/pages/user';
import NewPlace from './places/pages/NewPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlace from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import AuthenticateForm from './user/components/AuthenticationForm';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const [isLoadedIn, setIsloadedIn] = useState(false);

    const sideDrawerOpenHandler = () => setSideDrawerOpen(true);

    const sideDrawerCloseHandler = () => setSideDrawerOpen(false);

    const login = useCallback(() => {
        setIsloadedIn(true)
    }, []);

    const logout = useCallback(() => {
        setIsloadedIn(false)
    }, []);

    let content = <Router>
        <MainNavigation click={sideDrawerOpen} clickFalse={sideDrawerCloseHandler}
                clickTrue={sideDrawerOpenHandler} />
        <Switch>
            <Route path="/" exact component={Users} />
            <Route path="/authenticate" exact component={AuthenticateForm} />
            <Redirect to="/authenticate" />
        </Switch>
        </Router>

    if(isLoadedIn) {
        content = <Router>
                    <MainNavigation click={sideDrawerOpen} clickFalse={sideDrawerCloseHandler}
                        clickTrue={sideDrawerOpenHandler} />
                <Switch>  
                    <Route path="/" exact component={Users} />
                    <Route path="/place/newplace" exact component={NewPlace} />
                    <Route path="/:userId/places" exact component={UserPlace} />
                    <Route path="/place/:placeId" exact component={UpdatePlace} />
                    <Redirect to="/" />
                </Switch>
                </Router>
    }

    return (
        <AuthContext.Provider value={{
                isLoadedIn: isLoadedIn,
                login: login,
                logout: logout
            }}>
                {content}
        </AuthContext.Provider>
    );
};

export default App;