import quotes from './quotes/reducer';
//import quotes2 from './quotes/reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({quotes}); //, quotes2});

export default rootReducer;
