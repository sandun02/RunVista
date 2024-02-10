import {thunk} from 'redux-thunk';
import {  createStore, applyMiddleware , combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import { carsReducer } from './reducers/carsReducer';
import { alertsReducer } from './reducers/alertsReducer';


const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
     carsReducer,
     alertsReducer,
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
    
  )
);

export default store