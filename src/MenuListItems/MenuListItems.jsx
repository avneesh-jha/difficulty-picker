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
      return "gray";
    }
  };
  console.log(isHovered);
  return (
    <div
      className={style.container}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      Set to :{props.difficulty}
    </div>
  );
};
