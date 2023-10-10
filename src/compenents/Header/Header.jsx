import React from 'react';

import { Link } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

import { FaPen } from 'react-icons/fa';
import './header.scss';
import { User } from './User';

export const Header = () => {
    return (
        <header className="header">
            <div className="container" style={{ padding: '0 20px' }}>
                <div className="header__wrapper">
                    <div className="header__container-left">
                        <div className="header__logo">
                            <Link to="/" className="header__logoTebiren">
                                Tebiren
                            </Link>
                        </div>
                    </div>
                    {/* Center */}
                    <div className="header__container-center">
                        <div className="header__container-search">
                            <form
                                action="/search"
                                method="get"
                                className="search"
                            >
                                <input
                                    type="text"
                                    name="searchButtonClick"
                                    id=""
                                    className="search__input"
                                    placeholder="Поиск"
                                />
                                <button
                                    type="submit"
                                    className="search__button"
                                >
                                    <FiSearch className="header__fisearch" />
                                </button>
                            </form>
                        </div>
                        <div className="header__container-post input__buttonTebiren">
                            <a href="" className="post-buttons-select__button">
                                <div className="post-buttons-select__content">
                                    <div className="post-buttons-select__icon">
                                        <FaPen />
                                    </div>
                                    <div className="post-buttons-select__text">
                                        Написать пост
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* Right  */}
                    <User />
                </div>
            </div>
        </header>
    );
};
