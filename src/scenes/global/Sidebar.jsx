import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Sidebar as SidebarIcon,
    Menu,
    MenuItem,
    SubMenu,
} from 'react-pro-sidebar';
// icons
import { BsFillBookmarkFill } from 'react-icons/bs';
import { AiFillFire, AiTwotoneExperiment } from 'react-icons/ai';
import { FaBookSkull, FaJava } from 'react-icons/fa6';
import { HiAcademicCap } from 'react-icons/hi';
import { BiLogoPhp } from 'react-icons/bi';
import { IoLogoJavascript, IoLogoPython } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import './sidebar.scss';
// import 'react-pro-sidebar/dist/styles';
// import '~react-pro-sidebar/dist/scss/styles.scss';

const ItemSidebar = ({ title, to, icon }) => {
    return (
        <MenuItem
            component={<Link to={to} />}
            icon={icon}
            style={{
                backgroundColor: '#000',
                border: 'none',
            }}
        >
            {title}
        </MenuItem>
    );
};

export const Sidebar = () => {
    const [toggled, setToggled] = useState(false);

    return (
        <div className="tebiren__sidebar">
            <SidebarIcon
                style={{ backgroundColor: '#000', border: 'none' }}
                onBackdropClick={() => setToggled(false)}
                customBreakPoint="1000px"
                toggled={toggled}
            >
                <Menu style={{ backgroundColor: '#000', border: 'none' }}>
                    <ItemSidebar to="/top" icon={<AiFillFire />} title="Топ" />
                    <ItemSidebar
                        to="/lists"
                        icon={<BsFillBookmarkFill />}
                        title="Библиотека"
                    />
                    <ItemSidebar
                        to="/advice"
                        icon={<AiTwotoneExperiment />}
                        title="Советы"
                    />

                    <SubMenu
                        label="Курсы"
                        component={<Link to="/courses" />}
                        icon={<HiAcademicCap />}
                        style={{
                            backgroundColor: '#000',
                            border: 'none',
                        }}
                    >
                        <ItemSidebar
                            to="/courses/javascript"
                            icon={<IoLogoJavascript />}
                            title="Javascript"
                        />
                        <ItemSidebar
                            to="/courses/php"
                            icon={<BiLogoPhp />}
                            title="PHP"
                        />
                        <ItemSidebar
                            to="/courses/java"
                            icon={<FaJava />}
                            title="Java"
                        />
                        <ItemSidebar
                            to="/courses/python"
                            icon={<IoLogoPython />}
                            title="Python"
                        />
                    </SubMenu>
                    <ItemSidebar
                        to="/books"
                        icon={<FaBookSkull />}
                        title="Книги"
                    />
                </Menu>
                {/* </SidebarContext> */}
            </SidebarIcon>
            <div className="menu-button__icon">
                <button className="sb-button" onClick={() => setToggled(true)}>
                    <FiMenu className="sb-button__icon" />
                </button>
            </div>
        </div>
    );
};
