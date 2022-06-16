import React from 'react';

class Tile extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick (e) {
        // false = revealing, true = flagging
        if (e.altKey) {
            this.props.updateGame(this.props.tile, true)
        }
        else {
            this.props.updateGame(this.props.tile, false); 
        }

    }

    render () {
        var tile = this.props.tile;
        if (tile.explored) {
            if (tile.bombed) return <div className = "tile bombed" onClick = {this.handleClick}>{"\uD83D\uDCA3"}</div>

            return <div className = "tile revealed"  onClick = {this.handleClick}>{tile.adjacentBombCount()}</div>
    
        }            

        else if (tile.flagged) {
            return <div className = "tile flagged" onClick = {this.handleClick}>&#128681</div>
        }
        else {
            return <div className = "tile " onClick = {this.handleClick}>  </div>
        }
    }
}
export default Tile;