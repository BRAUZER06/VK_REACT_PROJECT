import React from 'react';
import style from './SidebarBlock.module.scss'

const SidebarBlock = ({itemsSidebar}) => {
  return (
    <div className={style.sidebar_container}>
      {itemsSidebar.map((e) => (
        <div className={style.sidebar_container_block} key={e}>
          <div className={style.sidebar_container_block_div_items}>
            {e.svg}
            <p className={style.sidebar_container_block_div_items_p_items}>
              {e.item}
            </p>
          </div>

          {e.alert !== 0 && (
            <p className={style.sidebar_container_block_p_alert}>{e.alert}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarBlock;