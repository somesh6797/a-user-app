import React, { Component } from "react";
import style from "../styles/style.module.css";

export class CreateUser extends Component {
    render() {
        return (
            <div className={style.register_container}>
                <div className={style.register_box}>
                    <h1>Create User</h1>
                    <input
                        className={style.input}
                        type="text"
                        name="name"
                        id=""
                        placeholder="Enter name"
                    />
                    <input
                        className={style.input}
                        type="text"
                        name="email"
                        id=""
                        placeholder="Enter Email"
                    />
                    <input
                        className={style.input}
                        type="password"
                        name="password"
                        id=""
                        placeholder="Enter Password"
                    />
                    <input
                        className={style.input}
                        type="password"
                        name="passconf"
                        id=""
                        placeholder="Confirm Password"
                    />
                    <textarea
                        className={style.input}
                        name="desc"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Description"
                    ></textarea>
                    <input
                        type="file"
                        name=""
                        id=""
                        placeholder="Upload Profile Photo"
                    />
                    <button> Create User</button>
                </div>
            </div>
        );
    }
}

export default CreateUser;
