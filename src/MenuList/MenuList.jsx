import { MenuListItems } from "../MenuListItems/MenuListItems";
import style from "./style.module.css";

export const MenuList = (props) => {
  return (
    <div className={style.container}>
      <MenuListItems difficulty="low" />
      <MenuListItems difficulty="medium" />
      <MenuListItems difficulty="high" />
      <MenuListItems difficulty="insane" />
    </div>
  );
};
