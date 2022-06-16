import React from 'react';
import * as Minesweeper from './minesweeper.js';
import Board from './board.jsx';
import Modal from './modal.jsx'

class Game extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            board: new Minesweeper.Board(8, 8),
        }
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame (tile, flagging) {
        // Flagging = false => revealing
        if (flagging) tile.toggleFlag
        else tile.explore();
        this.setState({
            board: this.state.board
        })

        
    }

    restartGame () {
        this.setState({
            board: new Minesweeper.Board(8, 8),
        })
    }

    render () {
        if (this.state.board.lost()) {
            return (
                <div>
                    <Modal restartGame = {this.restartGame.bind(this)} />
                    <Board board = {this.state.board} updateGame = {this.updateGame} blur = {true}/>                
                </div>
            )
        }

        else if (this.state.board.won()) {
            return <h1>You won!!!!</h1>
        }
        return (
            <Board board = {this.state.board} updateGame = {this.updateGame} />
        )
    }
}

export default Game;