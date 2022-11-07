import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
/* import About from './About';
import Contact from './Contact'; */
/* import Axios from 'axios'; */
/* import {useNavigate} from 'react-router-dom'; */

const Register = () => {


    const [fname, setFname] = useState("");
    const [lname, setlname] = useState("");
    const [confirmPass, setconfirmpass] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [token, setToken] = useState("");
    useEffect(() => {
        console.log(token, "OPOP");
    }, [token])


    const loginClick = (e) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        if (password === confirmPass) {

            var raw = JSON.stringify({
                "first_name": fname,
                "last_name": lname,
                "email": email,
                "password": password,
                "confirm_password": confirmPass
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://espsofttech.in:6021/api/userRegister", requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result);
                    alert("Register Successful");
                    window.location.href = "/login";
                })
                .catch(error => console.log('error', error));
        }
        else {

            console.log("Password Dont Match");
        }
    }

    return (
        <div id='home'>
            <div>
                <div class="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input type="email" className="form-control"  name="fmane" onChange={(e) => setFname(e.target.value)} />
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Last Name</label>
                    <input type="email" className="form-control"  name="fmane" onChange={(e) => setlname(e.target.value)} />
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control"  name="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name="password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" className="form-control" name="password" onChange={(e) => setconfirmpass(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => loginClick()}>Login</button>

            </div>
        </div>

    )
}

export default Register;