import React from 'react';
import MainHeader from './MainHeader';
import classes from './MainNavigation.module.css';
import MainNavLink from './NavLink';
import SideDrawer from './SideDrawer';
import NavLink from './NavLink';
import BackDrop from '../BackDrop';

const mainNavigation = (props) => {
    return (
        <React.Fragment>
            {props.click ? <BackDrop Click={props.clickFalse} /> : null }
            {props.click ? <SideDrawer>
                    <nav style={{marginTop: "10px"}} onClick={props.clickFalse}>
                        <NavLink />
                    </nav>
                </SideDrawer> : null }
            <MainHeader>
                <div className={classes.main_nav}>
                    <p className={classes.menu} onClick={props.clickTrue}>MENU</p>
                    <p className={classes.place}>YOUR PLACE</p>
                    <div><MainNavLink/></div>
                </div>
            </MainHeader>
        </React.Fragment>
    );
}


export default mainNavigation;