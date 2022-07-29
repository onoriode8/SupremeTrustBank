import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import classes from './NavLink.module.css';

const NavLinks = () => {
    const auth = useContext(AuthContext);
    
    return (
        <ul className={classes.nav_links}>
            <li>
                <NavLink to="/" exact>ALL USERS</NavLink>
           </li>
           {auth.isLoadedIn && <li>
                <NavLink to="/u1/places">MY PLACES</NavLink>
            </li>}
            {auth.isLoadedIn && <li>
                <NavLink to="/place/newplace">ADD PLACE</NavLink>
            </li>}
            {!auth.isLoadedIn &&<li>
                <NavLink to="/authenticate">AUTHENTICATE</NavLink>
            </li>}
            {auth.isLoadedIn &&<li>
                <NavLink onClick={auth.logout} to="/authenticate">LOGOUT</NavLink>
            </li>}
        </ul>
    )
};

export default NavLinks;