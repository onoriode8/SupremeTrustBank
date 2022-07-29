import React from 'react';
// import classes from './UsersList.module.css';
import UserItems from './UserItems';

const userLists = (props) => {
    if(props.items.length === 0) {
        return <h2>No User Found.</h2>
    } else {
        return <ul>
          {props.items.map(user => <UserItems key={user.id} 
            id={user.id}
            name={user.name} 
            image={user.image} 
            placeCount={user.place} />)
           }
        </ul>
    }
   
};

export default userLists;