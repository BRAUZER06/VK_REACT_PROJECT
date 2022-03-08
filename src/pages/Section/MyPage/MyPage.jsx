import React from "react";
import style from "./MyPage.module.scss";
import classNames from "classnames";

const MyPage = () => {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.myInfo}>
          <div className={classNames(style.myInfo_myPhoto, style.padding_one)}>
            <div className={style.myInfo_myPhoto_img}>
              <img
                src="https://sun9-16.userapi.com/impg/sCFnG5Gm_y5Qy0ejqU-AbosJE8i2TMND0un2WQ/BezuZa_UhgQ.jpg?size=1080x1080&quality=96&sign=c86ca05dd57756354224907eaab4268a&type=album"
                alt="Фото"
              />
            </div>
            <p>Редактировать</p>
            <div className={style.myInfo_myPhoto_info}>
              <div>
                <svg
                  fill="none"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="currentColor">
                    <path
                      clip-rule="evenodd"
                      d="M12 7.1a.9.9 0 01.9.9v3.73l2.24 2.23a.9.9 0 11-1.28 1.28l-2.5-2.5a.9.9 0 01-.26-.64V8a.9.9 0 01.9-.9z"
                      fill-rule="evenodd"
                    ></path>
                    <path d="M19 5a9.87 9.87 0 00-7-2.9 9.87 9.87 0 00-7.1 3V3a.9.9 0 00-1.8 0v4a.9.9 0 00.9.9h4a.9.9 0 000-1.8H6.45A8.07 8.07 0 0112 3.9c2.24 0 4.26.9 5.73 2.37A8.07 8.07 0 0120.1 12c0 2.24-.9 4.26-2.37 5.73A8.07 8.07 0 0112 20.1a8.06 8.06 0 01-5.2-1.9.9.9 0 00-1.16 1.39A9.86 9.86 0 0012 21.9a9.87 9.87 0 009.9-9.9c0-2.73-1.1-5.21-2.9-7z"></path>
                  </g>
                </svg>
                <p>Воспоминания </p>
              </div>
              <div>
                <svg
                  fill="none"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    clip-rule="evenodd"
                    fill="currentColor"
                    fill-rule="evenodd"
                  >
                    <path d="M9.1 13.4a.9.9 0 01.9-.9h4a.9.9 0 110 1.8h-4a.9.9 0 01-.9-.9z"></path>
                    <path d="M5 3.1A2.9 2.9 0 002.1 6v2c0 1.11.93 1.9 2 1.9V18A2.9 2.9 0 007 20.9h10a2.9 2.9 0 002.9-2.9V9.9c1.07 0 2-.79 2-1.9V6A2.9 2.9 0 0019 3.1zm0 1.8A1.1 1.1 0 003.9 6v2a.1.1 0 00.1.1h16a.1.1 0 00.1-.1V6A1.1 1.1 0 0019 4.9zm2 14.2A1.1 1.1 0 015.9 18V9.9h12.2V18a1.1 1.1 0 01-1.1 1.1z"></path>
                    <path d="M10 12.5a.9.9 0 100 1.8h4a.9.9 0 000-1.8z"></path>
                  </g>
                </svg>
                <p>Архив историй</p>
              </div>
              <div>
                <svg
                  fill="none"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8 3.1a4.5 4.5 0 012.35.44 3.17 3.17 0 011.31 1.31c.3.57.42 1.11.44 2.1V12a.9.9 0 01-1.8.11V8.9H3.9v5.9c0 .87.06 1.18.23 1.5.13.25.32.44.57.57.3.16.58.22 1.31.23H18.83l-1.47-1.46a.9.9 0 01-.08-1.18l.08-.1a.9.9 0 011.18-.08l.1.08 3 3a.9.9 0 01.08 1.18l-.08.1-3 3a.9.9 0 01-1.36-1.18l.08-.1 1.47-1.46H6.2c-1.07 0-1.65-.1-2.21-.37l-.14-.07a3.17 3.17 0 01-1.32-1.31 4.2 4.2 0 01-.44-2.1V7.21c0-1.16.11-1.74.44-2.35a3.17 3.17 0 011.31-1.32c.57-.3 1.11-.42 2.1-.44h.25zm0 1.8H6.2c-.88 0-1.18.06-1.5.23-.25.13-.44.32-.57.57-.16.3-.22.58-.23 1.31v.09h16.2v-.09c-.01-.73-.07-1.02-.23-1.3a1.37 1.37 0 00-.57-.58c-.3-.16-.58-.22-1.31-.23z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>Денежные переводы </p>
              </div>
            </div>
          </div>

          <div
            className={classNames(style.myInfo_myPresent, style.padding_one)}
          >
            <p>
              Подарки <span>3</span>
            </p>
            <div>
              <img src="https://vk.com/sticker/4-389-96" alt="Фото" />
              <img src="https://vk.com/images/gift/1000/96.png" alt="Фото" />
              <img src="https://vk.com/images/gift/711/96.png" alt="Фото" />
            </div>
          </div>
          <div
            className={classNames(style.myInfo_myFriends, style.padding_one)}
          >
            <div className={style.myInfo_myFriends_div1}>
              <p className={style.myInfo_myFriends_div1_p1}>
                Друзья <span>46</span>
              </p>
              <p className={style.myInfo_myFriends_div1_p2}>обновления</p>
            </div>
            <div className={style.myInfo_myFriends_div2}>
              <div>
                <img
                  src="https://sun9-29.userapi.com/impf/c629520/v629520153/f3c6/Qf0brIC47MM.jpg?size=516x515&quality=96&sign=aadac754dee916133b1e871484d1d100&type=album"
                  alt="#!"
                />
                <p>Ася</p>
              </div>
              <div>
                <img
                  src="https://sun9-11.userapi.com/impg/0bOz6y_Cib1qH8Gr7oxXMb1zvcnUBmmwKmUXoQ/DZs1vJu1j5c.jpg?size=607x1080&quality=96&sign=1d1cdca033a64052f919f252a1a6f686&type=album"
                  alt="#!"
                />
                <p>Макка</p>
              </div>
              <div>
                <img
                  src="https://sun9-17.userapi.com/impg/-R3-AeDVeuOwk_Dus1A8oARDTlsCb5Vnp0k2IA/072Iw6cT4dY.jpg?size=867x1080&quality=96&sign=9ac08bc54dbfdeadb078b8ecbed24f8c&type=album"
                  alt="#!"
                />
                <p>Islam</p>
              </div>
              <div>
                <img
                  src="https://sun9-78.userapi.com/impf/c638318/v638318852/52eed/SV2YB0ogvW4.jpg?size=720x405&quality=96&sign=1fa2d62e6eacabd8dfb4f9f02cb68490&type=album"
                  alt="#!"
                />
                <p>Murtaz</p>
              </div>
              <div>
                <img
                  src="https://sun9-88.userapi.com/impg/c854324/v854324579/174b22/oLPfSTjYjfI.jpg?size=582x583&quality=96&sign=5c293709368ce30d7cc7225f3214dd47&type=album"
                  alt="#!"
                />
                <p>Исропил</p>
              </div>
              <div>
                <img
                  src="https://sun9-77.userapi.com/impf/c848524/v848524856/1ced48/WIRrk8C6hqI.jpg?size=608x1080&quality=96&sign=68d015196b436329446dc94942d72669&type=album"
                  alt="#!"
                />
                <p>Руслан</p>
              </div>
            </div>
            <div className={style.myInfo_myFriends_hr}>{/* hr */}</div>
            <div className={style.myInfo_myFriends_div3}>
              <p>Друзья онлайн <span>2</span></p>
              <div className={style.myInfo_myFriends_div3_div_photo}>
                <div>
                  <img
                    src="https://sun9-53.userapi.com/impg/zExPXNFHWQL2ql3nwraOTLzujtWcuP_cF9KJjA/BXs6B_2utKw.jpg?size=811x1080&quality=95&sign=c68eabd4356161394dbe8ca91c59f145&type=album"
                    alt="#!"
                  />
                  <p>Никита</p>
                </div>
                <div>
                  <img
                    src="https://sun9-23.userapi.com/impg/09nhChNxz7Jvr6ERC7LEroatnjEA0LWhZlBUnA/VKfEZyM3pPA.jpg?size=963x963&quality=96&sign=cb50f64ad5dbe9d937ec31a14bbc9cb6&type=album"
                    alt="#!"
                  />
                  <p>Айша</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className={classNames(style.myInfo_myGroups, style.padding_one)}
          ></div> */}
        </div>

        <div className={style.block}>
          <div
            className={classNames(style.block_name, style.padding_two)}
          ></div>
          <div
            className={classNames(style.block_photo, style.padding_two)}
          ></div>
          <div
            className={classNames(style.block_newPost, style.padding_two)}
          ></div>
          <div
            className={classNames(style.block_post1, style.padding_two)}
          ></div>
          <div
            className={classNames(style.block_post2, style.padding_two)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
