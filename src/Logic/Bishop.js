import MaindiagonalChecking from "./straightMovingLogic/MainDiagonal";
import AlternatediagonalChecking from "./straightMovingLogic/AlternateDiagonal";
const bishopLogic = (
  index,
  team,
  allBlackfillPosition,
  allWhitefillPosition
) => {
  const possibleMainDiagonalIndexes = MaindiagonalChecking(
    index,
    team,
    allBlackfillPosition,
    allWhitefillPosition
  );
  const possibleAlternateDiagonalIndexes = AlternatediagonalChecking(
    index,
    team,
    allBlackfillPosition,
    allWhitefillPosition
  );
  // console.log(possibleMainDiagonalIndexes);
  return [...possibleMainDiagonalIndexes, ...possibleAlternateDiagonalIndexes];
};

export default bishopLogic;
