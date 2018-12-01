import React from 'react';
import Widgets from './widgets';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AutoComplete extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputVal: ''
        };
        // console.log(this.state.inputVal == 0);
        // console.log(this.props.favEats);
        this.pickName = this.pickName.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }



    pickName(event){
        const name = event.currentTarget.innerText;
        this.setState({inputVal: name});
    }

    handleInput(event){
        const changeValue = event.currentTarget.value;
        this.setState({input: changeValue});
    }

    render() {
        const favEats = this.props.favEats;
        // console.log(favEats);
        const pickOptions = favEats.map((pick, idx) => {
            return (
                <li key={idx} onClick={this.pickName}>{pick}</li>
            );
        });
        
        
        return (
            <div className="auto-complete">
                <h3>AutoComplete</h3>
                <div>
                    <input
                        onChange = {this.handleInput}
                        value = {this.state.inputVal}
                        placeholder =  'Search...' />
                    <ul className = "lists">
                        <li>{favEats}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default AutoComplete;