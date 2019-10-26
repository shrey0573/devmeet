import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './app/layout/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const RootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(<App />, RootEl)
}

if(module.hot){
    module.hot.accept('./app/layout/App', () =>{
        setTimeout(render)
    })
}

render();
serviceWorker.register();
