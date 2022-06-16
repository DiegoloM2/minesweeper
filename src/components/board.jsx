import React from 'react';
import Tile from './tile.jsx'
class Board extends React.Component {
    constructor (props) {
        super(props);

    }

    render () {
        console.log(this.props.board.grid);
        return (
            <div>
                {
                    this.props.board.grid.map(
                        (row, Ridx) => {
                            return (
                                <div key = {`row${Ridx}`}>
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