import React, { useRef } from 'react';

import { AiOutlineUser, AiTwotoneSetting } from 'react-icons/ai';
import { FaUserSecret } from 'react-icons/fa';
import { BsFileEarmarkBreakFill, BsSearchHeartFill } from 'react-icons/bs';

import './index.scss';

const ProfileSidebar = () => {
    const inputRef = useRef(null);
    function handleClick() {
        inputRef.current.focus();
    }
    console.log(inputRef);
    return (
        <div className="profile-sidebar">
            <div className="profile-sidebar_content">
                <ul className="profile-sidebar_list">
                    <li
                        className="profile-sidebar_item"
                        ref={inputRef}
                        onClick={handleClick}
                    >
                        <div className="ps_item-icons">
                            <FaUserSecret className="ps_item-icon" />
                        </div>
                        <div className="ps_item-span">
                            <a href="#">Мои профиль</a>
                        </div>
                    </li>
                    <li className="profile-sidebar_item">
                        <div className="ps_item-icons">
                            <AiTwotoneSetting className="ps_item-icon" />
                        </div>
                        <div className="ps_item-span">
                            <a href="">Настройка</a>
                        </div>
                    </li>
                    <li className="profile-sidebar_item">
                        <div className="ps_item-icons">
                            <BsFileEarmarkBreakFill className="ps_item-icon" />
                        </div>
                        <div className="ps_item-span">
                            <a href="">Мои посты</a>
                        </div>
                    </li>
                    <li className="profile-sidebar_item">
                        <div className="ps_item-icons">
                            <BsSearchHeartFill className="ps_item-icon" />
                        </div>
                        <div className="ps_item-span">
                            <a href="">Подписки</a>
                        </div>
                    </li>
                    <li className="profile-sidebar_item">
                        <div className="ps_item-span ps_item-exit">
                            <a href="" className="error">
                                Выйти
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileSidebar;
