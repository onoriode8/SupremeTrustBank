import React from 'react';

const backdrop = (props) => {
    return (
        <div style={{
            backgroundColor: "rgba(0,0,0, 0.8)",
            width: "100%",
            height: "100vh"
        }} onClick={props.Click}></div>
    );
};


export default backdrop;