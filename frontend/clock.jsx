import React from 'react';
import Widgets from './widgets';

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        };
        // console.log("inside constructor" + this);
        this.tick = this.tick.bind(this);


    }

    tick() {
        // console.log("inside tick" + this);
        this.setState(
            {
                time: new Date()
            }
        );
    }

    componentDidMount() {
        this.id = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }

    render() {
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();
        let day = this.state.time.getDay();
        let month = this.state.time.getMonth();
        let year = this.state.time.getYear();

        return (
            <div className="clock">
                <h2>Clock</h2>
                <h3>Time: {hours}:{minutes}:{seconds} PST</h3>
                <h3>Date: {this.state.time.toDateString()}</h3>
            </div>
        );
    }

}

export default Clock;