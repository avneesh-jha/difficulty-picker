import { useState } from "react";
import { DisplayDifficultyLevel } from "./DisplayDifficultyLevel/DisplayDifficultyLevel";

export const App = () => {
  return (
    <div>
      <div align="center">Choose Your React Course difficulty</div>
      <DisplayDifficultyLevel difficulty="low"></DisplayDifficultyLevel>
    </div>
  );
};
