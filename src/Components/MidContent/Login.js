import { React, useState, useEffect } from 'react'

const Login = (props) => {
    const [error, setError] = useState("");
    const [formElements, setFormElements] = useState({
        email: "",
        password: ""
    });
    var emailPressed = (evnt) => {
        setFormElements({ ...formElements, email: evnt.target.value });
    }
    var passwordPressed = (evnt) => {
        setFormElements({ ...formElements, password: evnt.target.value });
    }
    const login = (e) => {
        e.preventDefault();

        if(formElements.email.trim()==""){
            setError("Email cannot be left blank");    
        }
        else if(formElements.password.trim()==""){
            setError("Password cannot be left blank");    
        }else{
            setError("");
            fetch("/auth", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "email": formElements.email,
                    "password": formElements.password
                })
            }).then((res) => {
                if (res.status === 200) {
                    setFormElements({ firstName: "", lastName: "", email: "", password: "" });
                    setError("Logged In Successfully");
                    alert("Logged In Successfully");
                    props.setPageName("home");
                }
                else {
                    setError("User name or password is incorrect");
                    return res.json();
                }
            }).then((data) => {
                console.log(data)
            }).catch((err) => {
                console.log(err);
            })
        }

    }


    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="offset-3 col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    Login
                                </div>
                                <div className="card-body">
                                    <div className="contact-form">
                                        <h6 style={{ color: "red" }}>{error}</h6>
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="email">Email</label>
                                                    <input name="email" onChange={emailPressed} value={formElements.email} type="text" className="form-control" placeholder="Email" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="password">Password</label>
                                                    <input type="password" name="password" onChange={passwordPressed} value={formElements.password} className="form-control" placeholder="Password" />
                                                </div>
                                                <div><button className="btn" onClick={login} type="submit">Login</button></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
