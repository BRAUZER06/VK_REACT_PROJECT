import React from "react";
import style from "./Sidebar.module.scss";

const Sidebar = () => {
  const [itemsSidebar, setItemsSidebar] = React.useState([
    {
      item: "Моя страница",
      alert: "0",
      svg: (
        <svg
          fill="none"
          height="20"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M5.84 15.63a6.97 6.97 0 008.32 0 8.2 8.2 0 00-8.32 0zM4.7 14.57a7 7 0 1110.6 0 9.7 9.7 0 00-10.6 0zM10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm-1.5 7a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5-3a3 3 0 100 6 3 3 0 000-6z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
        </svg>
      ),
    },
  ]);


  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.sidebar_container}>
          <div className={style.sidebar_container_block}>
            {itemsSidebar.map((e)=>(<div className={style.sidebar_container_block} key={e}>
              {e.svg}<p>{e.item}</p></div>))}
          </div>
          <div className={style.sidebar_container_block}>
            <svg
              fill="none"
              height="20"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M11.84 2H8.16c-.93 0-1.67 0-2.26.05-.62.05-1.15.15-1.63.4a4.15 4.15 0 00-1.82 1.82 4.26 4.26 0 00-.4 1.63C2 6.5 2 7.23 2 8.16v3.68c0 .93 0 1.67.05 2.26.05.62.15 1.15.4 1.63.4.78 1.04 1.42 1.82 1.82.48.25 1.01.35 1.63.4.6.05 1.33.05 2.26.05h3.68c.93 0 1.67 0 2.26-.05a4.26 4.26 0 001.63-.4 4.15 4.15 0 001.82-1.82c.25-.48.35-1.01.4-1.63.05-.6.05-1.33.05-2.26V8.16c0-.93 0-1.67-.05-2.26a4.26 4.26 0 00-.4-1.63 4.15 4.15 0 00-1.82-1.82 4.26 4.26 0 00-1.63-.4C13.5 2 12.77 2 11.84 2zm-6.9 1.79c.25-.12.56-.2 1.08-.25.53-.04 1.2-.04 2.17-.04h3.62c.96 0 1.64 0 2.17.04.52.05.83.13 1.07.25.5.25.9.66 1.16 1.16.12.24.2.55.25 1.07l.02.48H3.52l.02-.48c.05-.52.13-.83.25-1.07.25-.5.66-.9 1.16-1.16zM3.5 8v3.81c0 .96 0 1.64.04 2.17.05.52.13.83.25 1.07.25.5.66.9 1.16 1.16.24.12.55.2 1.07.25.53.04 1.2.04 2.17.04h3.62c.96 0 1.64 0 2.17-.04a2.8 2.8 0 001.07-.25c.5-.25.9-.66 1.16-1.16.12-.24.2-.55.25-1.07.04-.53.04-1.2.04-2.17V8.19 8z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
            <p>Новости</p>
          </div>
          <div className={style.sidebar_container_block}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="message_outline_20__Page-2"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="message_outline_20__message_outline_20">
                  <path
                    id="message_outline_20__Shape"
                    opacity=".4"
                    d="M0 0h20v20H0z"
                  ></path>
                  <path
                    d="M6.83 15.75c.2-.23.53-.31.82-.2.81.3 1.7.45 2.6.45 3.77 0 6.75-2.7 6.75-6s-2.98-6-6.75-6S3.5 6.7 3.5 10c0 1.21.4 2.37 1.14 3.35.1.14.16.31.15.49-.04.76-.4 1.78-1.08 3.13 1.48-.11 2.5-.53 3.12-1.22zM3.24 18.5a1.2 1.2 0 01-1.1-1.77A10.77 10.77 0 003.26 14 7 7 0 012 10c0-4.17 3.68-7.5 8.25-7.5S18.5 5.83 18.5 10s-3.68 7.5-8.25 7.5c-.92 0-1.81-.13-2.66-.4-1 .89-2.46 1.34-4.35 1.4z"
                    id="message_outline_20__Icon-Color"
                    fill="currentColor"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </g>
            </svg>
            <p>Мессенджер</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
