import React from 'react';
import { useParams } from 'react-router-dom';


const DUMMY_PLACE = [
    {
        id: "p1",
        title: "Empire State Building1", 
        imageUrl: "",
        description: "One of the most famous sky scrappers in the world!",
        address: "20 W 34th St, New York, Ny 10001",
        creatorId: "u1",
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        }
    },
    {
        id: "p2",
        title: "Empire State Building2", 
        imageUrl: "",
        description: "One of the most famous sky scrappers in the world!",
        address: "20 W 34th St, New York, Ny 10001",
        creatorId: "u2",
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        }
    }
];

const UpdatePlace = () => {
    const placeId = useParams().placeId;
    const identified = DUMMY_PLACE.find(p => p.id === placeId)

    if(!identified) {
        return <h1>Could not get update place</h1>
    }
    return <form>
        <input type='text' />
    </form>
};

export default UpdatePlace;