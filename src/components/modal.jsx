import React from 'react';

class Modal extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="modal">
            <div className="modal-body">
                <h1 className="card-title">Shoot, you lost!</h1>
                <button className="btn btn-primary" onClick = {this.props.restartGame}>Restart</button>
            </div>
            </div>
        )
    }
} 
export default  Modal;