import React from 'react';

import { BiLogoTelegram } from 'react-icons/bi';

import './telegramInput.scss';

export const TelegramTb = () => {
    return (
        <div className="telegramTb">
            <a href="https://t.me/tebirenBot" className="telegramTb_padding">
                <BiLogoTelegram className="telegramTb__icons" />
                <span className="telegramTb__text">TEBIREN bot</span>
            </a>
        </div>
    );
};
