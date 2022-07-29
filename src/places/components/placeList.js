import React from 'react';
import PlaceItems from './placeItems';
import { Link } from 'react-router-dom';

const placeList = (props) => {
    if(props.items.length === 0) {
        return <div>
            <h2>No Place Found. Maybe create one ?</h2>
            <Link to="/place/newplace"><button>Share Place</button></Link>
            </div>
    }
     return  <ul style={{listStyle: "none"}}>{props.items.map(place => <PlaceItems 
        key={place.id} 
        id={place.id}
        image={place.imageUrl}
        title={place.title}
        description={place.description}
        address={place.address}
        creatorId={place.creator}
        coordinate={place.location}
        /> )}  
        
    </ul>
};

export default placeList;