import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
// import "./forminput.css"
import App from './app';
import {BrowserRouter} from 'react-router-dom'
import { firebase } from '../src/lib/firebase.prod'
import '../src/lib/firebase.prod'
import {FirebaseContext} from './components/Firebase';

ReactDOM.render(<FirebaseContext.Provider value={{ firebase }}>
    <BrowserRouter><App /></BrowserRouter>
</FirebaseContext.Provider>, document.getElementById('root'));

