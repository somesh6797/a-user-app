import React, { Component } from "react";
import style from "../styles/style.module.css";

class User extends Component {
    render() {
        return (
            <div className={style.usercontainer}>
                <div className={style.user_box}>
                    <div className={style.profile_img}></div>
                    <div className={style.user_name}>Lorem Ipsum</div>
                </div>
            </div>
        );
    }
}

export default User;
