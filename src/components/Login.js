import React, { Component } from "react";
import style from "../styles/style.module.css";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
        this.login = this.login.bind(this);
        this.onChangeHandle = this.onChangeHandle.bind(this);
    }

    componentDidMount() {
        console.log("object");
    }

    async login() {
        // const resp = await axios.post(
        //     "http://dignizant.com/practical-task-api-doc/public/api/login",
        //     data
        // );
        // console.log("resp", resp);

        console.log("Login function");

        const data = {
            email: this.state.email,
            password: this.state.password,
        };

        axios
            .post(
                "http://dignizant.com/practical-task-api-doc/public/api/login",
                data
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log("error", err);
            });
    }

    onChangeHandle(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div className={style.login_container}>
                <div className={style.login_box}>
                    <h1>Login to your account</h1>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="Enter Email"
                        value={this.state.username}
                        name="email"
                        onChange={this.onChangeHandle}
                    />
                    <input
                        className={style.input}
                        type="password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.onChangeHandle}
                        name="password"
                    />
                    <input
                        className={style.submit_button}
                        type="submit"
                        value="login"
                        onClick={this.login}
                    />
                </div>
            </div>
        );
    }
}

export default Login;
