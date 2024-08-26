const knight = (index, team, allBlackfillPosition, allWhitefillPosition) => {
  let allTeamMemberPosition;
  let enemyPosition;

  if (team === "White") {
    allTeamMemberPosition = allWhitefillPosition;
    enemyPosition = allBlackfillPosition;
  } else if (team === "Black") {
    console.log("Black");
    allTeamMemberPosition = allBlackfillPosition;
    enemyPosition = allWhitefillPosition;
  }

  const revelantIndex = () => {
    let [row, col] = index;
    let possibleChances = [];
    const row1 = row + 2;
    const col1 = col - 1;
    possibleChances.push([row1, col1]);
    const row2 = row + 2;
    const col2 = col + 1;
    possibleChances.push([row2, col2]);
    const row3 = row - 2;
    const col3 = col - 1;
    possibleChances.push([row3, col3]);
    const row4 = row - 2;
    const col4 = col + 1;
    possibleChances.push([row4, col4]);
    const row5 = row - 1;
    const col5 = col + 2;
    possibleChances.push([row5, col5]);
    const row6 = row - 1;
    const col6 = col - 2;
    possibleChances.push([row6, col6]);
    const row7 = row + 1;
    const col7 = col + 2;
    possibleChances.push([row7, col7]);
    const row8 = row + 1;
    const col8 = col - 2;
    possibleChances.push([row8, col8]);

    const revelantPossibleChances = possibleChances.filter((item) => {
      let [newRow, newCol] = item;
      return newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7;
    });

    return revelantPossibleChances;
  };

  const allRevelentIndexes = revelantIndex();
//   console.log(allRevelentIndexes);

  const teamRevelantIndexes = allRevelentIndexes.filter((item) => {
    let [newRow, newCol] = item;

    const chances = allTeamMemberPosition.filter((item) => {
      const [row, col] = item;
      return newRow === row && newCol === col;
    });

    if (chances.length === 0) return [newRow, newCol];
  });

  return teamRevelantIndexes;
};

export default knight;
