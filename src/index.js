import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './App';
import Login from './components/Login';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
    	<Router history={history}>
    	  <Route path='/login' component={Login} />
	      <Route path='/*' component={App} />
	    </Router>
    </Provider>, document.getElementById('root'),
);
registerServiceWorker();
