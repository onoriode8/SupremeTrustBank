import React from 'react';
import classes from './SideDrawer.module.css';
import ReactDOM from 'react-dom';

const sideDrawer = (props) => {
    const content = <div className={classes.sideDrawer}>{props.children}</div>
    return ReactDOM.createPortal(content, document.getElementById("side-Drawer"))
}


export default sideDrawer;