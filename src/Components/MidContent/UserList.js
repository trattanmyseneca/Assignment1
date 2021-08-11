import React from 'react'
import { useState, useEffect } from 'react';
const UserList = () => {
    const [users, setUser] = useState([]);
    const [isDeleted,setIsDeleted] = useState();
    useEffect(() => {
        fetch("/users").then((res) => {
            //console.log(res);
            return res.json();
        }).then((data) => {
            //console.log(data);
            setUser(data.body);
        }).catch((err) => {
            //console.log(err);
        },[]);
    });
    const deleteuser = (id) => {
        fetch("/users/" + id, {
            method: "Delete"
        }).then((res) => {
            console.log(res);
            setIsDeleted(isDeleted+1);            
        }).then(() => {

        });
    }
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="offset-1 col-md-10">
                            <div className="card">
                                <div className="card-header">
                                    List Of Users
                                </div>
                                <div className="card-body">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user) => (
                                                <tr key={user.id}><td>{user.firstName}</td>
                                                <td>{user.lastName}</td>
                                                <td>{user.email}</td>
                                                <td> <a href="javascript:void(0)" onClick={() => deleteuser(user.id)}>Delete</a> </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserList
