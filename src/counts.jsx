import React from 'react';
class Counts extends React.component {

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
                props.previousCounts.map((count) => (<li>{count}</li>))
            }
        </ul>
        )
    }
}

export default Counts;