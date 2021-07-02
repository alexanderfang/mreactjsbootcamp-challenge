import { 
    createStore,
    applyMiddleware,
    combineReducers 
} from "redux";
import reducer from "./reducers/PokemonReducer";
import logger from "../middlewares/logger";

const store = createStore(combineReducers({
    reducer
    }),
    applyMiddleware(logger)
);

export default store;