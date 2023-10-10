import React from 'react';

const ProfileMain = () => {
    return (
        <div className="profile-wrapper">
            <div className="profile-wrapper__main">
                <div className="profile-wrapper_content">
                    <div className="profile-wrapper_title">
                        <h2>Стена</h2>
                    </div>
                    <div className="profile-wrapper_statistics">
                        <ul className="pw_statistics-list">
                            <li>
                                <div className="pw_statistics-item">
                                    <span className="pw_statistics-item-title">
                                        0
                                    </span>
                                    <span className="pw_statistics-item-span">
                                        Ваши Посты
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="pw_statistics-item">
                                    <span className="pw_statistics-item-title">
                                        0
                                    </span>
                                    <span className="pw_statistics-item-span">
                                        Сохраненное
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="pw_statistics-item">
                                    <span className="pw_statistics-item-title">
                                        0
                                    </span>
                                    <span className="pw_statistics-item-span">
                                        Лайки
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="pw_statistics-item">
                                    <span className="pw_statistics-item-title">
                                        0
                                    </span>
                                    <span className="pw_statistics-item-span">
                                        комментари
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileMain;
