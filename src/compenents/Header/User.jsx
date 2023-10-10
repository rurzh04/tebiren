import React from 'react';
import { useState } from 'react';

import { Link } from 'react-router-dom';

import { BiSolidUser, BiExit } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';
import {
    AiOutlineSetting,
    AiOutlineFileAdd,
    AiOutlineDown,
} from 'react-icons/ai';

import ImgArnat from '../../assets/img/arnatAitzhan.jpg';

import './header.scss';

export const User = () => {
    const user = true;
    const [profileOpen, setProfileOpen] = useState(false);

    const close = () => {
        setProfileOpen(null);
    };

    return (
        <div className="header__container-right">
            <div className="header__right-bell">
                <FaBell className="header__bi" />
            </div>
            <div className="header__right-user">
                {user ? (
                    <>
                        <div
                            className="header__user-profile"
                            onClick={() => setProfileOpen(!profileOpen)}
                        >
                            <div className="header__user-profile__img">
                                <img src={ImgArnat} alt="" />
                            </div>
                            <AiOutlineDown className="header-down" />
                        </div>

                        {profileOpen && (
                            <div className="openProfile" onClick={close}>
                                <div className="openProfile__profile">
                                    <Link to="/" className="">
                                        <div className="openProfile-img">
                                            <img src={ImgArnat} alt="" />
                                        </div>
                                    </Link>
                                    <div className="openProfile-text">
                                        <h4>Aitzhan Arnat</h4>
                                        <label>Almaty</label>
                                    </div>
                                </div>
                                <div className="openProfile_section">
                                    <Link to="/profile">
                                        <div className="openProfile-box">
                                            <AiOutlineSetting className="openProfile-icon" />
                                            <h4>Настройки</h4>
                                        </div>
                                    </Link>
                                    <Link to="/post">
                                        <div className="openProfile-box">
                                            <AiOutlineFileAdd className="openProfile-icon" />
                                            <h4>Черновики</h4>
                                        </div>
                                    </Link>
                                    <Link to="/exit">
                                        <div className="openProfile-box openProfile-exit">
                                            <BiExit className="openProfile-icon" />
                                            <h4>Выход</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <BiSolidUser className="header__user" />
                        <Link to="/user" className="header__user-sight">
                            Войти
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};
