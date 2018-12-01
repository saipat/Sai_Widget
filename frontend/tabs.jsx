import React from 'react';
import Widgets from './widgets';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { index: 0, title: props.panes[0].title, content: props.panes[0].content };
    }

    changeContent(num) {
        this.setState({ index: num });
        this.setState({ title: this.props.panes[num].title, content: this.props.panes[num].content });

    }

    render() {
        return (
            <div className="tab">
                <div className="tab-header">
                    <button className="tablink" onClick={() => this.changeContent(0)}>one</button>
                    <button className="tablink" onClick={() => this.changeContent(1)}>two</button>
                    <button className="tablink" onClick={() => this.changeContent(2)}>three</button>

                    <article className="tab-content">
                        <p>{this.state.content}</p>
                    </article>
                </div>
            </div>
        );
    }

}

export default Tabs;