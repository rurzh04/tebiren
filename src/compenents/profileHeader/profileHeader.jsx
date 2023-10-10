import React, { useState } from 'react';

import { useClipboard } from 'use-clipboard-copy';
import { MdContentCopy, MdCheck } from 'react-icons/md';

import ImgArnat from '../../assets/img/arnatAitzhan.jpg';

import './profile.scss';

const ProfileHeader = () => {
    const [copied, setCopied] = useState(false);
    const clipboard = useClipboard();
    const id = 34234;

    const handleCopy = () => {
        clipboard.copy(`${id}`);

        setCopied(true);
        const interval = setInterval(() => {
            setCopied(false);
        }, 3000);

        return () => clearInterval(interval);
    };

    return (
        <div className="tb-profile_header">
            <div className="tb-profile_header-content">
                {/* USER */}
                <div className="tb-profile_user">
                    <div className="tb-profile_user-avatar">
                        <div className="tb-profile_user-img">
                            <img src={ImgArnat} alt="" />
                        </div>
                    </div>
                    <div className="tb-profile_user-content">
                        <div className="tb-profile_user-info">
                            <div className="tb-profile_user-infro__text">
                                <button
                                    className="tb-profile_user-identifier"
                                    onClick={handleCopy}
                                >
                                    <span>ID: {id}</span>
                                    {copied ? (
                                        <MdCheck className="tb-profile_icon" />
                                    ) : (
                                        <MdContentCopy className="tb-profile_icon" />
                                    )}
                                </button>
                            </div>
                            <div className="tb-profile_user-name">
                                Aitzhan Arnat
                            </div>
                        </div>
                    </div>
                </div>
                {/* ACTIONS */}
                <div className="tb-profile_actions">
                    <div className="tb-profile_post">
                        <a className="tb-profile_post_button">
                            <span>Написать пост</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
