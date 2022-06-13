import React from 'react'; //es6 import syntax
import Counts from './counts.jsx';

class ClickCounter extends React.Component {
    constructor (props) { //props passed in at time of declaration
        super(props); //have to call super before we use 'this'

        this.state = {
            count: 0, 
            clicks: 0,
            previousCounts:[]
        }; //declare content
    }

    click (event) { //event
        event.preventDefault();
        this.setState({
            count:this.state.count + 1,
            clicks:this.state.clicks +1
        });
    }
    reset (event) {
        event.preventDefault();
        this.setState({
            count:0,
            previousCounts: [...this.state.previousCounts, this.state.count]
        });

    }
    
    render () {
        return (<div>
            <button onClick = {this.click.bind(this)}>Click Me!!</button> 
            <span>{this.state.count}</span>
            <br />
            <button onClick = {this.reset.bind(this)}>Reset</button>
            <Counts previousCounts = {this.state.previousCounts}/>
        </div>)
    }
}

export default ClickCounter; //export function