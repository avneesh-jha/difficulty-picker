import { MenuListItems } from "../MenuListItems/MenuListItems";
import style from "./style.module.css";
import { DIFFICULTIES } from "./Constants";
export const MenuList = (props) => {
  return (
    <div className={style.container}>
      {DIFFICULTIES.map((difficulty) => (
        <MenuListItems
          isSelected={props.difficulty === difficulty}
          onClicks={props.onItemClick}
          difficulty={difficulty}
        />
      ))}
    </div>
  );
};
