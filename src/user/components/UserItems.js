import React from 'react';
// import classes from './UserItems.module.css';
import { Link } from 'react-router-dom';

const userItems = (props) => {
    return (
        <li style={{textAlign: "center", marginRight: "40%", marginLeft: "40%"}}>
            <Link to={`/${props.id}/places`}>
                <div style={{border: "1px solid yellow",
                   backgroundColor: "yellow"
                 }}>
                    <div>
                            <img style={{width: "30%", height: "8%", borderRadius: "5rem"}} src={props.image} alt={props.name} />
                        </div>
                    <div>
                        <h2>{props.name}</h2>
                        <h3>{props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}</h3>
                    </div>
            </div>
            </Link>
        </li>
    );
};

export default userItems;