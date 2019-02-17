import React from 'react';
import ReactDOM from 'react-dom';
import { initFirebase } from './firebase';
import './css';
import App from './App';
import * as serviceWorker from './serviceWorker';

initFirebase();
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
