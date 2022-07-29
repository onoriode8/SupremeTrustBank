import React, { useState, useContext } from 'react';
import { AuthContext } from '../../shared/context/auth-context';

const PlaceItems = (props) => {
    const auth = useContext(AuthContext);

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");

    const editHandler = (e) => {
        e.preventDefault();
        const form = {
            title: title,
            address: address,
            description: description
        }
        console.log("coming from placeItem Edit place", form); // send to back-end
    }

    const deleteHandler = () => {
        console.log("Deleting");
    }

    return (
        <li style={{textAlign: "center"}}>
                {show && <form onSubmit={editHandler} style={{
                            width: "100%",
                            height: "100vh",
                            backgroundColor: "#eee",
                            position: "fixed",
                            zIndex: "200",
                            top: "0",
                            left: "0"
                        }}>
                            <div style={{marginTop: "250px"}}>
                    <div>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder={props.title} style={{
                            width: "30%",
                            padding: "20px 20px"
                        }}/>
                    </div>
                    <div>
                        <input type="text" onChange={(e) => setAddress(e.target.value)} placeholder={props.address} style={{
                            width: "30%",
                            padding: "20px 20px"
                        }}/>
                    </div>
                    <div>
                        <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder={props.description} style={{
                            width: "30%",
                            padding: "20px 20px"
                        }}/>
                    </div>
                    </div>
                    <button style={{backgroundColor: "red"}} type='submit'>UPDATEPLACE</button>
                </form> }
          <div>
              <img src={props.image} alt={props.title} />
          </div>
          <div>
              <h2>{props.title}</h2>
              <h3>{props.address}</h3>
              <p>{props.description}</p>
          </div>
          <div>
              <button>VIEW PLACE</button>
              {auth.isLoadedIn && <button onClick={() => setShow(true)}>EDIT</button>}
              {auth.isLoadedIn && <button onClick={deleteHandler}>DELETE</button>}
          </div>
        </li>
    );
};

export default PlaceItems;