import { useState } from "react";
import style from "./style.module.css";
export const MenuListItems = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const activate = () => {
    setIsHovered(true);
  };

  const deactivate = () => {
    setIsHovered(false);
  };

  const getBackgroundColor = () => {
    if (isHovered) {
      return "cyan";
    } else {
      if (props.isSelected) {
        return "green";
      }
      return "gray";
    }
  };
  const onItemClick = () => {
    props.onClicks(props.difficulty);
  };

  return (
    <div
      className={style.container}
      onClick={onItemClick}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      Set to :{props.difficulty}
    </div>
  );
};
