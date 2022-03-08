import React from "react";
import style from "./Search.module.scss";
import classNames from "classnames";
import { IoIosSearch } from "react-icons/io";
const Search = () => {
  return (
    <div className={style.container_content_left_Search}>
      <p className={classNames(style.icons_p)}>
        <IoIosSearch />
      </p>
      <input
        className={style.container_content_left_Search_input}
        type="text"
        placeholder="Поиск"
      />
    </div>
  );
};

export default Search;
