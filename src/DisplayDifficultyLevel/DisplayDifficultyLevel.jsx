import style from "./style.module.css";

export const DisplayDifficultyLevel = (props) => {
  return (
    <div className={style.container}>
      {props.difficulty
        ? `Difficulty set to ${props.difficulty}`
        : "No difficulty set"}
    </div>
  );
};
