import React from 'react';

import { Link } from 'react-router-dom';

import './commmentTb.scss';

export const CommentTb = () => {
    return (
        <div className="leftComment">
            <div className="leftComment-padding">
                <div className="leftComment-item">
                    <div className="tbCourse__header">
                        <span>Последние комментарии:</span>
                    </div>
                    <div className="leftComment__content">
                        <Link to="/" className="leftComment__link">
                            <div className="tbCourse__link-img">
                                <img src="" alt="" />
                            </div>
                            <div className="tbCourse__link-title">
                                <span> </span>
                                <p className="tbCourse__link-desc"></p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
