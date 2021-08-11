import React from 'react'
import { useState } from 'react'
const UserRegistration = () => {
    const [error, setError] = useState("");
    const [formElements, setFormElements] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    var firstNamePressed = (evnt) => {
        setFormElements({ ...formElements, firstName: evnt.target.value });
    }
    var lastNamePressed = (evnt) => {
        setFormElements({ ...formElements, lastName: evnt.target.value });
    }
    var emailPressed = (evnt) => {
        setFormElements({ ...formElements, email: evnt.target.value });
    }
    var passwordPressed = (evnt) => {
        setFormElements({ ...formElements, password: evnt.target.value });
    }

    var saveChanges = (e) => {
        e.preventDefault();
        console.log(formElements);
        if (formElements.firstName.trim() == "") {
            setError("First Name is mandatory");
        }
        else if (formElements.lastName.trim() == "") {
            setError("Last Name is mandatory");
        }
        else if (formElements.email.trim() == "") {
            setError("Email is mandatory");
        }
        else if (formElements.password.trim() == "") {
            setError("Password is mandotory");
        }
        else {
            fetch("/users", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "firstName": formElements.firstName,
                    "lastName": formElements.lastName,
                    "email": formElements.email,
                    "password": formElements.password
                })
            }).then((res) => {
                if (res.status === 200) {
                    setFormElements({ firstName: "", lastName: "", email: "", password: "" });
                    setError("Saved Successfully");
                }
                else {
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
                                    User Registrtion
                                </div>
                                <div className="card-body">
                                    <div className="contact-form">
                                        <form>
                                            <div className="form-row">
                                                <label style={{ color: "red" }}>{error}</label>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="firstName">First Name</label>
                                                    <input name="firstName" type="text" onChange={firstNamePressed} value={formElements.firstName} className="form-control" placeholder="First Name" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="lastName">Last Name</label>
                                                    <input name="lastName" onChange={lastNamePressed} value={formElements.lastName} type="text" className="form-control" placeholder="Last Name" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="email">Email</label>
                                                    <input name="email" onChange={emailPressed} value={formElements.email} type="text" className="form-control" placeholder="Email" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="password">Password</label>
                                                    <input type="password" name="password" onChange={passwordPressed} value={formElements.password} className="form-control" placeholder="Password" />
                                                </div>
                                                <div>
                                                    <button onClick={saveChanges} className="btn" type="submit">Save</button>
                                                </div>
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

export default UserRegistration
