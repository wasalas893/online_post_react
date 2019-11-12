import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';


import {createStore,applyMiddleware} from 'redux';

import{Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers';

import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';

import Login from './components/Login';

import Header from './routes/Header';
 
//redux



//create redux store ->reducers -> 'action'| applymiiddlear

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));







ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
<div>
  <Header />
  <Switch>
    <Route path="/" component={App} exact={true} />
    <Route path="/login" component={Login} exact={true} />
  </Switch>
</div>
</BrowserRouter>

</Provider>

, document.getElementById('root'));
serviceWorker.unregister();
