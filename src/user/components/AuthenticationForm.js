import React, { useState, useContext } from 'react';
import { AuthContext } from '../../shared/context/auth-context';

const Authenticate = () => {
    const auth = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [showRegister, setShowRegister] = useState(false);

    const signUpHandler = (e) => {
        e.preventDefault();
        const form = {
            name: name,
            email: email,
            password: password
        }

        console.log("signup authenticataion", form); //send credientials to back-end

    }

    const loginInHandler = (e) => {
        e.preventDefault();
        // fetch from back-end
        console.log("login authenticataion"); //send credientials to back-end
        auth.login();
    }

    return <React.Fragment>
            <form onSubmit={loginInHandler} style={{textAlign: "center"}}>
                <div>
                    <label>Email</label>
                    <br />
                   <input style={{padding: "20px 10px", margin: "5px 0px"}} type="text"  onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>password</label>
                    <br />
                   <input style={{padding: "20px 10px", margin: "5px 0px"}} type="text"  onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <p onClick={setShowRegister}>Don't have an account yet. create one</p>
                <button type='submit'>Login</button>
            </form>
            {showRegister && <form className='sign up' onSubmit={signUpHandler} style={{textAlign: "center"}}>
                <div>
                    <label>Name</label>
                    <br />
                   <input type="text" style={{padding: "20px 10px", margin: "5px 0px"}}  onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Email</label>
                    <br />
                   <input type="text" style={{padding: "20px 10px", margin: "5px 0px"}}  onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <br />
                   <input type="text" style={{padding: "20px 10px", margin: "5px 0px"}}  onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type='submit'>Sign up</button>
            </form> }
    </React.Fragment>
};

export default Authenticate;