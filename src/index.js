
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router'

import './css/style.css'

import App from './components/App';
import Storepicker from './components/Storepicker';
import Notfound from './components/Notfound';

const Root = () => {
    return(
        <BrowserRouter>
        <div>
            <Match exactly pattern="/" component={Storepicker}/>
            <Match exactly pattern="/store/:storeId" component={App}/>
            <Miss component={Notfound}/>
            </div>
        </BrowserRouter>
        
    )
}

ReactDOM.render(
    <Root />,
    document.getElementById('main')
);
