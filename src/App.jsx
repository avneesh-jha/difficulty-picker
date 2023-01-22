import { useState } from "react";
import { DisplayDifficultyLevel } from "./DisplayDifficultyLevel/DisplayDifficultyLevel";
import { MenuListItems } from "./MenuListItems/MenuListItems";

export const App = () => {
  return (
    <div>
      <div align="center">Choose Your React Course difficulty</div>
      <MenuListItems difficulty={"Low"}></MenuListItems>
      <DisplayDifficultyLevel difficulty="low"></DisplayDifficultyLevel>
    </div>
  );
};
