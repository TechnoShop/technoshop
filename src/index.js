import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./routes";
import registerServiceWorker from './registerServiceWorker';
import './theme/globalStyles';

ReactDOM.render(
    Routes,
    document.getElementById('root')
);
registerServiceWorker();
