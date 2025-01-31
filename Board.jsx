import {useState} from 'react';
import CalculateWinner from './Calculate_Winner';

const Board = ({xIsNextPlayer, squares, onSelection}) {

    const handleClick = () => {
        if (CalculateWinner(squares) || squares[i]) {
            return;
        };

        const nextSquares = squares.slice();

        xIsNextPlayer ? nextSquares[i] = "X" : nextSquares[i] = "O";

        onSelection(nextSquares);
    }

    const winner = CalculateWinner(squares);
    let status;
    if (winner) {
        
    }
}

export default Board;
