import React from "react";
import style from "./Header.module.scss";


import Logo from "./Logo/Logo";
import Alert from "./Alert/Alert";
import Music from "./Musicc/Music";
import Search from "./Search/Search";
import Profile from "./Profile/Profile";


const Header = () => {
  return (
    <div className={style.Header}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.container_content_left}>
            <Logo />
            <Search />
            <Alert />
            <Music />
          </div>
          <div className={style.container_content_right}>
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
