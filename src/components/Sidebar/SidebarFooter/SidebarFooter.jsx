import React from "react";
import style from "./SidebarFooter.module.scss";
import classNames from "classnames";

const SidebarFooter = () => {
  const [toggleSidebarFooterMenuInfo, setToggleSidebarFooterMenuInfo] =
    React.useState(false);

  return (
    <div className={style.wrapper_footer}>
      <a href="#!">Блог</a>
      <a href="#!">Разработчикам</a>
      <a href="#!">Для бизнеса</a>
      <div
        onMouseOver={() => setToggleSidebarFooterMenuInfo(true)}
        className={classNames(
          style.wrapper_footer_div,
          toggleSidebarFooterMenuInfo && style.wrapper_footer_div_active
        )}
        onMouseOut={() => setToggleSidebarFooterMenuInfo(false)}
      >
        <a href="#!">Еще</a>
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
      </div>
      <div className={style.wrapper_toggleMneu}>
        <p>О вконтакте</p>
        <p>Вакансия</p>
        <p>Правования информация</p>
        <p>Защита данных</p>
        <p>Центр безопасности</p>
        <p>Язык: русский</p>
      </div>
    </div>
  );
};

export default SidebarFooter;
