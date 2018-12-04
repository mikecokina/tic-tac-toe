import React from 'react'
import { Square } from './Square'


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squaresState: Array(9).fill(null),
            xIsNext: Boolean(true),
        };
    }

    handleOnClick(i) {
        const squares = this.state.squaresState.slice();
        if (calculateWinner(squares) || squares[i] !=  null) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squaresState: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (
            <Square
                squareValue={this.state.squaresState[i]}
                click={() => this.handleOnClick(i)}
            />
        );
    }

    render() {
        const winner = calculateWinner(this.state.squaresState);
        const nextPlayer = (this.state.xIsNext === true) ? "X" : "O"
        const status = (winner ?  'Winner: ' + winner : 'Next player: ' + nextPlayer)

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board
