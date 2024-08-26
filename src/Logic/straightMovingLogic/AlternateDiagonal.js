const AlternatediagonalChecking = (
  index,
  team,
  allBlackfillPosition,
  allWhitefillPosition
) => {
  const [row, col] = index;
  // console.log(index);

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

  // upper and right part

  let i = row - 1;
  let j = col + 1;
  const totalPosition = [];

  while (i >= 0 && j <= 7) {
    const teamPosition = allTeamMemberPosition.filter((item) => {
      const [newRow, newCol] = item;
      return i === newRow && j === newCol;
    });

    // console.log(teamPosition);

    if (teamPosition.length !== 0) break;

    const enemyPosition = enemyAllPosition.filter((item) => {
      const [newRow, newCol] = item;
      return i === newRow && j === newCol;
    });

    if (enemyPosition.length !== 0) {
      totalPosition.push(enemyPosition[0]);
      break;
    }
    // console.log([i, j]);
    totalPosition.push([i, j]);

    i--;
    j++;
  }

  // lower left
  i = row + 1;
  j = col - 1;

  while (i <= 7 && j >= 0) {
    const teamPosition = allTeamMemberPosition.filter((item) => {
      const [newRow, newCol] = item;
      return i === newRow && j === newCol;
    });

    // console.log(teamPosition);

    if (teamPosition.length !== 0) break;

    const enemyPosition = allBlackfillPosition.filter((item) => {
      const [newRow, newCol] = item;
      return i === newRow && j === newCol;
    });

    if (enemyPosition.length !== 0) {
      totalPosition.push(enemyPosition[0]);
      break;
    }
    // console.log([i, j]);
    totalPosition.push([i, j]);

    i++;
    j--;
  }

  return totalPosition;
};

export default AlternatediagonalChecking;
