import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import AutoComplete from './autoComplete';


const panes = [
    { title: 'one', content: 'Eat' },
    { title: 'two', content: 'Sleep' },
    { title: 'three', content: 'Code' }
];

const favEats = [
    'Booba Tea',
    'Urban Curry',
    'House of Pho',
    'Subway',
    'Starbucks',
    'Tinpot',
    'Yard House',
    'Noodle House'
];


const Root = (props) => (
    <div className="rootWidget">
        <Clock />
        <Tabs panes = {panes}/>
        <Weather />
        <AutoComplete favEats={favEats}/>
    </div>
);

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(
        <Root />,
        root
    );


});