import React, { Component } from "react";
import style from "../styles/style.module.css";

export class UserDetails extends Component {
    render() {
        return (
            <div className={style.user_details_container}>
                <div className={style.user_details_box}>
                    <div className={style.profile_head}>
                        <div className={style.profile_pic}></div>
                        <h1 className={style.profile_name}>Lorem Ipsum</h1>
                    </div>
                    <div className={style.profile_desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et dolorem enim aliquam atque quaerat natus temporibus
                        magnam expedita sequi dolores.
                    </div>
                    <div className={style.profile_mail}>
                        mailto: : asdfghjk23@hotmail.com
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDetails;
