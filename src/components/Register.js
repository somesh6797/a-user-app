import axios from "axios";
import React, { Component } from "react";
import style from "../styles/style.module.css";

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            passconf: "",
            desc: "",
        };
        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.register = this.register.bind(this);
    }

    onChangeHandle(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    register() {
        console.log("object");
        // const header = {};
        const data = {
            name: "ankita",
            email: "ankita.gajera@dignizant.com",
            password: "ankita123",
            password_confirmation: "ankita123",
            description: "test",
            profile_photo:
                "/C:/Users/Admin/Desktop/AnyQuote_DEV/public/images/admin-loader.gif",
        };
        axios
            .post(
                "http://dignizant.com/practical-task-api-doc/public/api/register",
                data
            )
            .then((res) => {
                console.log(res);
            });
    }

    render() {
        return (
            <div className={style.register_container}>
                <div className={style.register_box}>
                    <h1>Register Yourself</h1>
                    <input
                        className={style.input}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter name"
                        onChange={this.onChangeHandle}
                        value={this.state.name}
                    />
                    <input
                        className={style.input}
                        type="text"
                        name="email"
                        id="register"
                        placeholder="Enter Email"
                        onChange={this.onChangeHandle}
                        value={this.state.email}
                    />
                    <input
                        className={style.input}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        onChange={this.onChangeHandle}
                        value={this.state.password}
                    />
                    <input
                        className={style.input}
                        type="password"
                        name="passconf"
                        id="passconf"
                        placeholder="Confirm Password"
                        onChange={this.onChangeHandle}
                        value={this.state.passconf}
                    />
                    <textarea
                        className={style.input}
                        name="desc"
                        id="desc"
                        cols="30"
                        rows="10"
                        placeholder="Description"
                        onChange={this.onChangeHandle}
                        value={this.state.desc}
                    ></textarea>
                    <input
                        type="file"
                        name="profile_img"
                        id="profile_img"
                        placeholder="Upload Profile Photo"
                    />
                    <button onClick={this.register}> Register</button>
                </div>
            </div>
        );
    }
}

export default Register;
