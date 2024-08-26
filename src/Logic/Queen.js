import horizontalChecking from "./straightMovingLogic/Horizontal";
import verticalChecking from "./straightMovingLogic/Vertical";
import MaindiagonalChecking from "./straightMovingLogic/MainDiagonal";
import AlternatediagonalChecking from "./straightMovingLogic/AlternateDiagonal";

const queenLogic = (
  index,
  team,
  allBlackfillPosition,
  allWhitefillPosition
) => {
  return [
    ...horizontalChecking(
      index,
      team,
      allBlackfillPosition,
      allWhitefillPosition
    ),
    ...verticalChecking(
      index,
      team,
      allBlackfillPosition,
      allWhitefillPosition
    ),
    ...MaindiagonalChecking(
      index,
      team,
      allBlackfillPosition,
      allWhitefillPosition
    ),
    ...AlternatediagonalChecking(
      index,
      team,
      allBlackfillPosition,
      allWhitefillPosition
    ),
  ];
};

export default queenLogic;
