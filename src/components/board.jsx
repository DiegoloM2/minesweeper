import React from 'react';
import Tile from './tile.jsx'
class Board extends React.Component {
    constructor (props) {
        super(props);

    }

    render () {
        console.log(this.props.board.grid);
        return (
            <div className = {this.props.blur ? "board-grid": ''}>
                {
                    this.props.board.grid.map(
                        (row, Ridx) => {
                            return (
                                <div key = {`row${Ridx}`} className = "tile-row">
                                    {row.map((tile, Tidx) => (<Tile key = {`tile${Tidx}`} tile = {tile} updateGame = {this.props.updateGame}/>))}
                                </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
}

export default Board;