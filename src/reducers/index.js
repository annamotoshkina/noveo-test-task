import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tokenReducer from './tokenReducer';
import directoryReducer from './directoryReducer';

export default combineReducers({
  token: tokenReducer,
  currentDirectory: directoryReducer,
  routing: routerReducer,
});
