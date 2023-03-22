import { useState } from "react";
import { DisplayDifficultyLevel } from "./DisplayDifficultyLevel/DisplayDifficultyLevel";
import { MenuList } from "./MenuList/MenuList";
import style from "./style.module.css";
export const App = () => {
  const [currentDifficulty, setCurrentDifficulty] = useState("");
  const onClickMenuListItem = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };
  return (
    <div>
      <h1 align="center">Choose Your React Course difficult</h1>
      <div className={style.workspace}>
        <MenuList
          difficulty={currentDifficulty}
          onItemClick={onClickMenuListItem}
        />
        <DisplayDifficultyLevel
          difficulty={currentDifficulty}
        ></DisplayDifficultyLevel>
      </div>
    </div>
  );
};
