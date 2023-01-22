import { DisplayDifficultyLevel } from "./DisplayDifficultyLevel/DisplayDifficultyLevel";
import { MenuList } from "./MenuList/MenuList";
import style from "./style.module.css";
export const App = () => {
  return (
    <div>
      <h1 align="center">Choose Your React Course difficult</h1>
      <div className={style.workspace}>
        <MenuList difficulty={"Low"}></MenuList>
        <DisplayDifficultyLevel difficulty="low"></DisplayDifficultyLevel>
      </div>
    </div>
  );
};
