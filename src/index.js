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

import {BrowserRouter,Switch,Route,Link,Redirect} from 'react-router-dom';

import Login from './components/Login';

import Header from './routes/Header';

import LoadingComponent from './components/LoadingComponent';

import AuthenticatedComponent from './components/AutnenticatedComponent';

import NoteDetail from './components/NoteDetail';

import NoteEdit from './components/NoteEdit';
 
//redux



//create redux store ->reducers -> 'action'| applymiiddlear

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));







ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <LoadingComponent>
<div>
 
  <Switch>
  
    <Route path="/login" component={Login} exact={true} />
    

    <AuthenticatedComponent>
    <Header />
    <Route path="/:id/edit" component={NoteEdit} exact={true} />
    <Route path="/" component={App} exact={true} />
    <Route path="/:id" component={NoteDetail} exact={true} />
    </AuthenticatedComponent>
  </Switch>
</div>
</LoadingComponent>
</BrowserRouter>

</Provider>

, document.getElementById('root'));
serviceWorker.unregister();
