import React from 'react';

import { TelegramTb } from '../../scenes/telegramInput';

import { CommentTb } from '../../scenes/comment';
import { TbCours } from '../../scenes/course/input';

import './tbNews.scss';

export const TbNews = () => {
    return (
        <aside>
            <div className="tbnews">
                <TelegramTb />
                <TbCours />
                {/* <CommentTb /> */}
            </div>
        </aside>
    );
};
