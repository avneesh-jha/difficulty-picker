export const DisplayDifficultyLevel = (props) => {
  return (
    <div>
      {props.difficulty
        ? `Difficulty set to ${props.difficulty}`
        : "No difficulty set"}
    </div>
  );
};
