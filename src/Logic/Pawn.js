const pawnLogic = (index, team, allBlackfillPosition, allWhitefillPosition) => {
//   console.log(team);
  let allTeamMemberPosition;
  let enemyPosition;
  let op;
  let reverse_op;

  function VarOperator(op) {
    //you object containing your operator
    this.operation = op;

    this.evaluate = function evaluate(param, value) {
      switch (this.operation) {
        case "+":
          return param + value;
        case "-":
          return param - value;
        default:
          return param;
      }
    };
  }

  if (team === "White") {
    allTeamMemberPosition = allWhitefillPosition;
    enemyPosition = allBlackfillPosition;
    op = new VarOperator("+");
    reverse_op = new VarOperator("-");
  } else if (team === "Black") {
    console.log("Black");
    allTeamMemberPosition = allBlackfillPosition;
    enemyPosition = allWhitefillPosition;
    op = new VarOperator("-");
    reverse_op = new VarOperator("+");
  }

  let [row, col] = index;
  // console.log(allTeamMemberPosition);
  const teamPossibleAheadChances = allTeamMemberPosition.filter((item) => {
    const [newRow, newCol] = item;
    return newRow === op.evaluate(row, 1) && newCol === col;
  });

  const enemyPossibleAheadChances = enemyPosition.filter((item) => {
    const [newRow, newCol] = item;
    return newRow === op.evaluate(row, 1) && newCol === col;
  });
  // console.log(enemyPossibleAheadChances)
  // console.log(teamPossibleAheadChances);

  const teamPossibleNewAheadChances = [];
  if (
    teamPossibleAheadChances.length === 0 &&
    enemyPossibleAheadChances.length === 0
  )
    teamPossibleNewAheadChances.push([op.evaluate(row, 1), col]);
//   console.log(teamPossibleNewAheadChances);
  const teamPossbileCrossChances = allTeamMemberPosition.filter((item) => {
    const [newRow, newCol] = item;
    return newRow === op.evaluate(row, 2) && newCol === col;
  });

  const enemyPossibleCrossChances = enemyPosition.filter((item) => {
    const [newRow, newCol] = item;
    return newRow === op.evaluate(row, 2) && newCol === col;
  });
  const teamPossibleNewCrossChances = [];

  if (
    teamPossbileCrossChances.length === 0 &&
    row === 1 &&
    enemyPossibleCrossChances.length === 0
  )
    teamPossibleNewCrossChances.push([op.evaluate(row, 2), col]);
  if (
    teamPossbileCrossChances.length === 0 &&
    row === 6 &&
    enemyPossibleCrossChances.length === 0
  )
    teamPossibleNewCrossChances.push([op.evaluate(row, 2), col]);
  // console.log(teamPossbileCrossChances);

  const enemyPossibleChances = enemyPosition.filter((item) => {
    const [newRow, newCol] = item;
    return (
      (newRow === op.evaluate(row, 1) && newCol === op.evaluate(col, 1)) ||
      (newRow === op.evaluate(row, 1) && newCol === reverse_op.evaluate(col, 1))
    );
  });
//   console.log(enemyPossibleChances);

  // console.log([...teamPossibleNewAheadChances, ...teamPossibleNewCrossChances, ...enemyPossibleChances]);
  // console.log(enemyPossibleChances, teamPossibleNewAheadChances, teamPossibleNewCrossChances)

  return [
    ...teamPossibleNewAheadChances,
    ...teamPossibleNewCrossChances,
    ...enemyPossibleChances,
  ];
};

export default pawnLogic;
