import React, { useEffect, useState } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessBishop, faChessPawn, faChessRook, faChessQueen, faChessKing, faChessKnight, faIndent } from '@fortawesome/free-solid-svg-icons'

const ChessSymbols = {
    'PawnWhite': <FontAwesomeIcon icon={faChessPawn} className='fa-4x green' />,
    'BishopWhite': <FontAwesomeIcon icon={faChessBishop} className='fa-4x green' />,
    'RookWhite': <FontAwesomeIcon icon={faChessRook} className='fa-4x green' />,
    'QueenWhite': <FontAwesomeIcon icon={faChessQueen} className='fa-4x green' />,
    "KingWhite": <FontAwesomeIcon icon={faChessKing} className='fa-4x green' />,
    "KnightWhite": <FontAwesomeIcon icon={faChessKnight} className='fa-4x green' />,

    'PawnBlack': <FontAwesomeIcon icon={faChessPawn} className='fa-4x red' />,
    'BishopBlack': <FontAwesomeIcon icon={faChessBishop} className='fa-4x red' />,
    'RookBlack': <FontAwesomeIcon icon={faChessRook} className='fa-4x red' />,
    'QueenBlack': <FontAwesomeIcon icon={faChessQueen} className='fa-4x red' />,
    "KingBlack": <FontAwesomeIcon icon={faChessKing} className='fa-4x red' />,
    "KnightBlack": <FontAwesomeIcon icon={faChessKnight} className='fa-4x red' />

}




function Cell({ identity, focusIdentity, index, handleClick, focusIndex, possiblePosition, isCurrentChance, ChangingPosition }) {
    const [row, col] = index;
    const [newRow, newCol] = focusIndex;
    const [focusPossibleChances, setFocusPossibleChances] = useState(false);



    // console.log(focusIndex);

    // console.log(identity, row, col);
    const [isBackgroundColor, setIsBackgroundColor] = useState('');

    // row === newRow && col === newCol && isBackgroundColor('backgroundFocus');

    useEffect(() => {
        setFocusPossibleChances(false);
        setIsBackgroundColor((perv) => {

            if (newRow === row && newCol === col) {
                return 'backGroundFocus'
            }
            else {
                perv = (row + col) % 2 === 0 ? 'backgroundBlack' : 'backgroundWhite';
                return perv
            }
        })


        possiblePosition.forEach((item) => {
            let [possibleRow, possibleCol] = item;
            

            console.log(possibleCol,possibleRow,focusIdentity);


            if (possibleRow === row && possibleCol === col && focusIdentity.includes(isCurrentChance)) {
                // console.log(isCurrentChance);
                // console.log(focusIdentity);
                // console.log(row + " " + col)
                setFocusPossibleChances(true);
            }
        })
    }, [newRow, newCol])

    const cell = 'cell';

    return (
        <div className={`${isBackgroundColor} ${cell} ${focusPossibleChances ? "possibleChances" : ''}`
        } onClick={
            () => {
                let current = '';
                let currentFocus = '';
                if (identity !== null) {
                    for (let i = identity.length - 5; i != identity.length && identity !== null; i++) {
                        current += identity[i];
                    }

                    for (let i = focusIdentity.length - 5; i != focusIdentity.length && focusIdentity !== null; i++) {
                        currentFocus += focusIdentity[i];
                    }
                }


                if (identity !== null && current === isCurrentChance) {

                    handleClick(index, identity);

                }
                else if (identity === null
                    || (currentFocus === 'White' && current === "Black")
                    || (currentFocus === 'Black' && current === "White")) {

                    possiblePosition.forEach((item) => {
                        let [possibleRow, possibleCol] = item;
                        if (possibleRow === row && possibleCol === col) {
                            ChangingPosition(row, col, current, identity)
                        }
                    })
                }

            }
        }>
            <div style={{ color: 'red' }} >
                <div className='logo'>
                    {ChessSymbols[identity]}
                </div>
            </div>


        </div >
    )
}

export default Cell