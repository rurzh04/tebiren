import React from 'react';
import { useState } from 'react';

import { LiaEyeSolid } from 'react-icons/lia';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import './tbItem.scss';

export const TbItem = ({
    user,
    date,
    title,
    desc,
    img,
    imgUser,
    like,
    comment,
    save,
    view,
    onClick,
    idItem,
}) => {
    const [isItemLike, setIsitemLike] = useState(false);
    const [isItemComment, setIsitemComment] = useState(false);

    const handleLike = (e) => {
        setIsitemLike(!isItemLike);
    };
    const handleComment = (e) => {
        setIsitemComment(!isItemComment);
    };

    return (
        <div className="tb-post__item">
            <div className="tb-post__padding">
                <div className="tb-post__header">
                    <div className="tb-post__header-avatar">
                        <div className="tb-post__header-avatarImg">
                            <img src={imgUser} alt={user} />
                        </div>
                    </div>
                    <div className="tb-post__header-info">
                        <div className="tb-post__header-info-top">
                            <a href="">{user}</a>
                        </div>
                        <div className="tb-post__header-info-date">{date}</div>
                    </div>
                </div>
                <div className="tb-post__content">
                    <div className="tb-post__content-title">
                        <h2>{title}</h2>
                    </div>
                    <div className="tb-post__content-desc">
                        <p>{desc}</p>
                    </div>
                    <div className="tb-post__content-img">
                        <div className="tb-post__contentImg">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
                <div className="tb-post__footer">
                    <div className="tb-post__footer-actions">
                        <div className="footer-actions__like footer-actions__all">
                            <button
                                className="footer-actions__button"
                                onClick={handleLike}
                            >
                                {isItemLike ? (
                                    <BiSolidLike className="footer-actions__icon" />
                                ) : (
                                    <BiLike className="footer-actions__icon" />
                                )}
                            </button>
                            <span>{like}</span>
                        </div>
                        <div className="footer-actions__comment footer-actions__all">
                            <button
                                className="footer-actions__button"
                                onClick={onClick}
                            >
                                <FaRegComment className="footer-actions__icon" />
                            </button>
                            <span>{comment}</span>
                        </div>
                        <div className="footer-actions__save footer-actions__all">
                            <button
                                className="footer-actions__button"
                                onClick={handleComment}
                            >
                                {isItemComment ? (
                                    <BsBookmarkFill className="footer-actions__icon" />
                                ) : (
                                    <BsBookmark className="footer-actions__icon" />
                                )}
                            </button>
                            <span>{save}</span>
                        </div>
                    </div>
                    <div className="tb-post__footer-space footer-actions__all">
                        <span>
                            <LiaEyeSolid className="footer-actions__icon" />
                        </span>
                        <span>{view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
