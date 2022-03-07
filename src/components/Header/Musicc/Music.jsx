import React from "react";
import classNames from "classnames";
import style from "./Music.module.scss";

const Music = () => {
  return (
    <div className={style.container_content_left_Music}>
      <div className={style.container_content_left_Music_div_pleer}>
        <p
          className={classNames(
            style.icons_p,
            style.container_content_left_Music_div_pleer_p
          )}
        >
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 13.17v3.33a1 1 0 11-2 0v-9a1 1 0 012 0v3.33l8.15-4.66c.82-.48 1.85.11 1.85 1.06v9.54c0 .95-1.03 1.54-1.85 1.06z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </p>
        <p
          className={classNames(
            style.icons_p,
            style.container_content_left_Music_div_pleer_p
          )}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.67 10.92c.82.49.82 1.67 0 2.16l-8.79 5.17c-.83.5-1.88-.1-1.88-1.08V6.83c0-.97 1.05-1.57 1.88-1.08l8.8 5.17z"
              fill="currentColor"
            ></path>
          </svg>
        </p>
        {/* <p className={classNames(style.icons_p, style.container_content_left_Music_div_pleer_p)}> <IoIosPause/></p> */}
        <p
          className={classNames(
            style.icons_p,
            style.container_content_left_Music_div_pleer_p
          )}
        >
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 10.83V7.5a1 1 0 112 0v9a1 1 0 01-2 0v-3.33l-8.15 4.66A1.23 1.23 0 014 16.77V7.23c0-.95 1.03-1.54 1.85-1.06z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </p>
      </div>
      <div className={style.container_content_left_Music_div_nameMusic}>
        <p className={style.container_content_left_Music_div_nameMusic_text}>
          Bob Marley - Bad Boys
        </p>
      </div>
    </div>
  );
};

export default Music;
