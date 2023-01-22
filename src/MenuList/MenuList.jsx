import { MenuListItems } from "../MenuListItems/MenuListItems";
import style from "./style.module.css";

export const MenuList = (props) => {
  return (
    <div className={style.container}>
      <MenuListItems
        isSelected={props.difficulty === "Low" ? true : false}
        onClick={props.onItemClick}
        difficulty="Low"
      />
      <MenuListItems
        isSelected={props.difficulty === "Medium" ? true : false}
        onClick={props.onItemClick}
        difficulty="Medium"
      />
      <MenuListItems
        isSelected={props.difficulty === "High" ? true : false}
        onClick={props.onItemClick}
        difficulty="High"
      />
      <MenuListItems
        isSelected={props.difficulty === "Insane" ? true : false}
        onClick={props.onItemClick}
        difficulty="Insane"
      />
    </div>
  );
};
