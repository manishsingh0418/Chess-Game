
        const kingLogic = (index,team,allBlackfillPosition,allWhitefillPosition) => {
            const [row, col] = index;
            console.log(index)
            // console.log(index);

            let allTeamMemberPosition;
            let enemyAllPosition;
            if ( team === "White") {
                allTeamMemberPosition = allWhitefillPosition;
                enemyAllPosition = allBlackfillPosition;

            }
            else if (team === "Black") {
                // console.log("Black");
                allTeamMemberPosition = allBlackfillPosition;
                enemyAllPosition = allWhitefillPosition;
            }


            const revelantIndex = () => {
                let [row, col] = index;
                let possibleChances = [];
                const row1 = row + 1; const col1 = col;
                possibleChances.push([row1, col1]);
                const row2 = row + 1; const col2 = col - 1;
                possibleChances.push([row2, col2]);
                const row3 = row + 1; const col3 = col + 1;
                possibleChances.push([row3, col3]);
                const row4 = row; const col4 = col + 1;
                possibleChances.push([row4, col4]);
                const row5 = row; const col5 = col - 1;
                possibleChances.push([row5, col5]);
                const row6 = row - 1; const col6 = col;
                possibleChances.push([row6, col6]);
                const row7 = row - 1; const col7 = col - 1;
                possibleChances.push([row7, col7]);
                const row8 = row - 1; const col8 = col + 1;
                possibleChances.push([row8, col8]);

                const revelantPossibleChances = possibleChances.filter((item) => {
                    let [newRow, newCol] = item;
                    return (newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7)
                })

                return revelantPossibleChances;
            }

            const allRevelentIndexes = revelantIndex();
            console.log(allRevelentIndexes);
            console.log(allTeamMemberPosition)
            

            const teamRevelantIndexes = allRevelentIndexes.filter((item) => {
                let [newRow, newCol] = item;

                const chances = allTeamMemberPosition.filter((item) => {
                    const [row, col] = item;
             
                    return (newRow === row && newCol === col)
                });
   
                if (chances.length === 0) return [newRow, newCol];
            });


console.log(teamRevelantIndexes)

            return teamRevelantIndexes;


        }

        export default kingLogic;