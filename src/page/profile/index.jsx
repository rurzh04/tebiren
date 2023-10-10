import React, { useState } from 'react';

import ProfileHeader from '../../compenents/profileHeader/profileHeader';
import ProfileMain from '../../compenents/profileHeader/profileMain';
import ProfileSidebar from '../../compenents/ProfileSidebar/profileRight';
import { TbItem } from '../../compenents/TbItem/TbItem';

import ImgArnat from '../../assets/img/arnatAitzhan.jpg';

import './profile.scss';

const Profile = () => {
    return (
        <div className="tb-center__profile">
            <div className="tb-profile">
                <ProfileHeader />
                <ProfileMain />

                {/* Wrapper */}
                <div className="profile-post">
                    <div style={{ width: '70%' }}>
                        <div className="profile-post__content">
                            <TbItem
                                user="Arnat Aitzhan"
                                date="25.08.2023"
                                title="Стоит прочитать: обзор книги «Клиенты на всю жизнь» Карла Сьюэлла и Пола Брауна"
                                desc="
                    Книга с примерами того, как сервис со стороны сотрудников способен изменить отношение клиентов к бизнесу и сделать их максимально лояльными.  В закладки
                    "
                                img={ImgArnat}
                                imgUser={ImgArnat}
                                like="100"
                                comment="53"
                                save="213"
                                view="1234"
                                idItem="4"
                            />
                        </div>
                    </div>
                    <ProfileSidebar />
                </div>
            </div>
        </div>
    );
};

export default Profile;
