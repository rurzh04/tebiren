import React from 'react';
import { TbItem } from '../../compenents/TbItem/TbItem';

import ImgArnat from '../../assets/img/arnatAitzhan.jpg';
import { TbNews } from '../../compenents/TebirenNews/TbNews';

import './dashboard.scss';

export const Home = () => {
    return (
        <div className="tb-center">
            <div className="content">
                <div className="tb-post">
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
                    <TbItem
                        user="Arnat Aitzhan"
                        date="25.08.2023"
                        title="Стоит прочитать: обзор книги «Клиенты на всю жизнь» Карла Сьюэлла и Пола Брауна"
                        desc="
                    Книга с примерами того, как сервис со стороны сотрудников способен изменить отношение клиентов к бизнесу и сделать их максимально лояльными.  В закладки
                    "
                        imgUser={ImgArnat}
                        like="100"
                        comment="53"
                        save="213"
                        view="1234"
                        idItem="4"
                    />
                </div>
            </div>
            <TbNews />
        </div>
    );
};
