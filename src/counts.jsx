import React from 'react';
class Counts extends React.Component {

    componentWillMount() { debugger }
    componentDidMount () { debugger }
    componentWillReceiveProps(nextProps) {debugger}
    componentWillUpdate (nextProps, nextState) {debugger}
    componentDidUpdate(prevProps, prevState) {debugger}
    componentWillUnmount() {debugger}

    render() {
        return (
        <ul>
            {
                this.props.previousCounts.map((count) => (<li>{count}</li>))
            }
        </ul>
        )
    }
}

export default Counts;