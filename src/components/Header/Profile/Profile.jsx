import React from "react";
import classNames from "classnames";
import style from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={style.container_content_right_LogoProfile}>
      <div className={style.container_content_right_LogoProfile_div_items}>
        <img src="https://vk.com/images/ecosystem_navigation_menu.svg" alt="" />
      </div>
      <div className={style.container_content_right_LogoProfile_div_myPhoto}>
        {/* redux */}
        <img
          src="https://sun9-16.userapi.com/impg/sCFnG5Gm_y5Qy0ejqU-AbosJE8i2TMND0un2WQ/BezuZa_UhgQ.jpg?size=1080x1080&quality=96&sign=c86ca05dd57756354224907eaab4268a&type=album"
          alt=""
        />
        <p
          className={classNames(
            style.icons_p,
            style.container_content_right_LogoProfile_div_myPhoto_p
          )}
        >
          {" "}
          <svg
            fill="none"
            height="8"
            viewBox="0 0 12 8"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M2.16 2.3a.75.75 0 011.05-.14L6 4.3l2.8-2.15a.75.75 0 11.9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 01-.13-1.05z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </p>
      </div>
    </div>
  );
};

export default Profile;
