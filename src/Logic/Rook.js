import verticalChecking from "./straightMovingLogic/Vertical";
import horizontalChecking from "./straightMovingLogic/Horizontal";
const rookLogic = (index, team, allBlackfillPosition, allWhitefillPosition) => {
  const possibleVerticalIndexes = verticalChecking(
    index,
    team,
    allBlackfillPosition,
    allWhitefillPosition
  );
  const possibleHorizontalIndexes = horizontalChecking(
    index,
    team,
    allBlackfillPosition,
    allWhitefillPosition
  );
  return [...possibleHorizontalIndexes, ...possibleVerticalIndexes];
};

export default rookLogic;
