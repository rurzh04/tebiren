import React from 'react';

import { Link } from 'react-router-dom';
import ivan from '../../assets/img/ivan.jfif';
import bogdan from '../../assets/img/bogdan.jpg';
import './TbCourse.scss';
import { TbCourse } from './TbCourse';

export const TbCours = () => {
    return (
        <div className="tbCourse">
            <div className="tbCourse-padding">
                <div className="tbCourse-item">
                    <div className="tbCourse__header">
                        <span>Активные курсы:</span>
                    </div>
                    <TbCourse
                        link="/"
                        imgCourse={ivan}
                        info="Автор: Иван Петриченко "
                        desc="Web разработка React.js "
                    />
                    <TbCourse
                        link="/"
                        imgCourse={bogdan}
                        info="Автор: Bogdan Stashchuk | Software Engineer, MBA, PhD "
                        desc="Node.js Express"
                    />
                    <TbCourse
                        link="/"
                        imgCourse={ivan}
                        info="Автор: дмиртрий лаврик "
                        desc="Основы php"
                    />
                    <div className="tbCourse__footer"></div>
                </div>
            </div>
        </div>
    );
};
