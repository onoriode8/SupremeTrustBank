import React, { useState, useEffect, useRef } from 'react';

const NewPlaces = () => {
    const [input, setInput] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");

    const inputElement = useRef();

    useEffect(() => {
        inputElement.current.focus();
    }, []);

    const newPlaceSubmitHandler = event => {
        event.preventDefault();
        const form = {
            input: input,
            description: description,
            address: address
        }
        console.log("from newplace component", form); 
    }


    return (
        <React.Fragment>
            <form style={{textAlign: 'center', marginTop: "3em"}} onSubmit={newPlaceSubmitHandler}>
                <input ref={inputElement} type='text' placeholder="Add Place" 
                    onChange={(event) => setInput(event.target.value)} style={{
                    width: "70%",
                    height: "3em"
                }} />
                 <input type='text' placeholder="Description" 
                    onChange={(event) => setDescription(event.target.value)} style={{
                    width: "70%",
                    height: "3em"
                }} />
                 <input type='text' placeholder="Address" 
                    onChange={(event) => setAddress(event.target.value)} style={{
                    width: "70%",
                    height: "3em"
                }} /><br />
                <button type="submit">Confirm</button>
            </form>
        </React.Fragment>    
    );
};

export default NewPlaces;