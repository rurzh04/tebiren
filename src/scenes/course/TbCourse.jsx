import React from 'react';

import { Link } from 'react-router-dom';

import './TbCourse.scss';

export const TbCourse = ({ link, imgCourse, info, desc }) => {
    return (
        <div className="tbCourse__content">
            <Link to={link} className="tbCourse__link">
                <div className="tbCourse__link-img">
                    <img src={imgCourse} alt="" />
                </div>
                <div className="tbCourse__link-title">
                    <span> {info}</span>
                    <p className="tbCourse__link-desc">{desc}</p>
                </div>
            </Link>
        </div>
    );
};
