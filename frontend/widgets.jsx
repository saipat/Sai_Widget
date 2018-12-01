import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';


const panes = [
    { title: 'one', content: 'Eat' },
    { title: 'two', content: 'Sleep' },
    { title: 'three', content: 'Code' }
];


const Root = (props) => (
    <div className="rootWidget">
        <Clock />
        <Tabs panes={panes} lookAt={"me"} />
    </div>
);

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(
        <Root />,
        root
    );


});