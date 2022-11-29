import React from 'react'
import './user-info.scss'
import firebase from '../../firebase'

const UserInfo = ({ user }) => {
    const userName = firebase.auth().currentUser;
    const name = userName.email.split("@gmail.com");
    return (
        <div className='user-info'>
            <div className="user-info__img">
                <img src={user.img} alt="" />
            </div>
            <div className="user-info__name">
                <span>{name}</span>
            </div>
        </div>
    )
}

export default UserInfo
