import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';


const Register = () => {


    const [fname, setFname] = useState("");
    const [lname, setlname] = useState("");
    const [confirmPass, setconfirmpass] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [passwordDONTMATCHError, setPassDONTMATCHError] = useState("");
    const [fnameError, setfnameError] = useState("");
    const [lnameError, setlnameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordminError, setPassminError] = useState("");


    const [token, setToken] = useState("");
    useEffect(() => {
        // console.log(token, "Token");
    }, [token])


    const registerClick = (e) => {
        // e.preventDefault()
        if (fname == "") {
            setfnameError("Please Enter First name");
        } else {
            setfnameError("");
        }



        if (lname == "") {
            setlnameError("Please Enter Last name");
        } else {
            setlnameError("");
        }

        if (email == "") {
            setemailError("Please provide your email")
        }
        else {
            setemailError("");
        }



        if (password.length < 6) {
            setPassminError("Enter at least 6 characters");
        } else {
            setPassminError("");
        }


        if (password === confirmPass) {
            setPassDONTMATCHError("");
        }
        else {
            setPassDONTMATCHError("PassWords don't match");
        }


        if (fname == "" || lname == "" || email == "" || (password.length < 6) || (confirmPass !== password)) {
        } else {
            apiCalling();
        }

    }


    function apiCalling() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
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
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result.success == false) {
                    alert(result.msg);
                } else {
                    alert(result.msg);
                    window.location.href = "/login";
                }

            })
            .catch(error => console.log(error.message));


    }

    return (
        <div id='home'>
            <div>

                <div class="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input type="text" className="form-control" required name="fmane" onChange={(e) => setFname(e.target.value)} />
                    <span style={{ color: "red" }}>{fnameError}</span>
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Last Name</label>
                    <input type="text" className="form-control" required name="fmane" onChange={(e) => setlname(e.target.value)} />
                    <span style={{ color: "red" }}>{lnameError}</span>
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" required name="email" onChange={(e) => setEmail(e.target.value)} />
                    <span style={{ color: "red" }}>{emailError}</span>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" required name="password" onChange={(e) => setPassword(e.target.value)} />
                    <span style={{ color: "red" }}>{passwordminError}</span>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" className="form-control" required name="password" onChange={(e) => setconfirmpass(e.target.value)} />
                    <span style={{ color: "red" }}>{passwordDONTMATCHError}</span>
                </div>
                <button className="btn btn-primary"
                    onClick={() => registerClick()}
                >Login</button>

            </div>
        </div>

    )
}

export default Register;