import {
    applyMiddleware, 
    combineReducers, 
    createStore
} from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import pokemons from "./pokemons/reducer";
import logger from '../middlewares/logger';

const store = createStore(
  combineReducers({
    pokemons,
  }), 
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;