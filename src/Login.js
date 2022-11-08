import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
/* import About from './About';
import Contact from './Contact'; */
/* import Axios from 'axios'; */
/* import {useNavigate} from 'react-router-dom'; */

const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setemailError] = useState("");


    const [token, setToken] = useState("");
    useEffect(() => {
        console.log(token, "Token");
    }, [token])


    const buttonSubmit = (e) => {

        if (email == "") {
            setemailError("Please provide your email")
        }
        else {
            setemailError("");
        }
        loginClick();

    }






    const loginClick = (e) => {

        if (email !== "" && password > 6) {
            apiCallingLogin();
        }

    }

    function apiCallingLogin() {
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
                console.log(result);
                if (result.success == false) {
                    alert(result.msg);
                } else {
                    setToken(result.Token);
                    localStorage.setItem("myData", JSON.stringify(result.data));
                    localStorage.setItem("token", JSON.stringify(result.Token));
                    alert(result.msg);

                    console.log(JSON.parse(localStorage.getItem("myData")), "Login Data");

                    alert("LocalStorage Data--> \n" + "ID : " + JSON.parse(localStorage.getItem("myData")).id + "\n" + "Email : " + JSON.parse(localStorage.getItem("myData")).email + "\n"+"Token : " + localStorage.getItem("token"));
                }

            })
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
                    <input type="email" className="form-control" required placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} />
                    <span style={{ color: "red" }}>{emailError}</span>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" required name="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => buttonSubmit()}>Login</button>
                {/* </form> */}
            </div>
        </div>

    )
}

export default Login;