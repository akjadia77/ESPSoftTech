import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
/* import About from './About';
import Contact from './Contact'; */
/* import Axios from 'axios'; */
/* import {useNavigate} from 'react-router-dom'; */

const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [token, setToken] = useState("");
    useEffect(() => {
        console.log(token, "OPOP");
    }, [token])



    const loginClick = (e) => {

        // e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": email,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://espsofttech.in:6021/api/login", requestOptions)
            .then(response => response.json())
            .then(result => {
                setToken(result.Token);
                alert("Login Successful");
            }


            )
            .catch(error => console.log('error', error));
    }


    return (
        <div id='home'>
            {/* <div>
            <h1>this is Home</h1>
            <li><a href='/'>Home</a></li>
            <li><a href='about'>About</a></li>
          <li><a href='contact'>Contact</a></li>
          </div> */}
            <div>
                {/* <form > */}

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => loginClick()}>Login</button>
                {/* </form> */}
            </div>
        </div>

    )
}

export default Login;