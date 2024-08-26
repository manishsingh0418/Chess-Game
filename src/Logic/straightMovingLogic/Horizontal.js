const horizontalChecking = (
  index,
  team,
  allBlackfillPosition,
  allWhitefillPosition
) => {
  const position = [];
  let [row, col] = index;
  let i = col - 1;

  const totalPosition = [];
  let allTeamMemberPosition;
  let enemyAllPosition;
  if (team === "White") {
    allTeamMemberPosition = allWhitefillPosition;
    enemyAllPosition = allBlackfillPosition;
  } else if (team === "Black") {
    // console.log("Black");
    allTeamMemberPosition = allBlackfillPosition;
    enemyAllPosition = allWhitefillPosition;
  }

  // left side of position of chess icon

  while (i >= 0) {
    const teamPosition = allTeamMemberPosition.filter((item) => {
      const [newRow, newCol] = item;
      return row === newRow && i === newCol;
    });
    // console.log('white' + teamPosition)

    if (teamPosition.length !== 0) break;

    const enemyPosition = enemyAllPosition.filter((item) => {
      const [newRow, newCol] = item;
      return row === newRow && i === newCol;
    });

    if (enemyPosition.length !== 0) {
      totalPosition.push(enemyPosition[0]);
      break;
    }
    // console.log([row, i]);
    totalPosition.push([row, i]);

    i--;
  }

  i = col + 1;

  // right side of positicohess icn
  while (i <= 7) {
    const teamPosition = allTeamMemberPosition.filter((item) => {
      const [newRow, newCol] = item;
      return row === newRow && i === newCol;
    });

    if (teamPosition.length !== 0) break;

    const enemyPosition = enemyAllPosition.filter((item) => {
      const [newRow, newCol] = item;
      return row === newRow && i === newCol;
    });
    // console.log(enemyPosition);
    if (enemyPosition.length !== 0) {
      totalPosition.push(enemyPosition[0]);
      break;
    }

    totalPosition.push([row, i]);
    i++;
  }
  return totalPosition;
};

export default horizontalChecking;
