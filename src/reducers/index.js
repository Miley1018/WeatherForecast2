import { combineReducers } from 'redux';
import reducer_search from './reducer_search';

const rootReducer = combineReducers({
  weather:reducer_search
});

export default rootReducer;
