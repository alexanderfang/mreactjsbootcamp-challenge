import { createStore } from "redux";
import reducer from "./reducers/PokemonReducer";

const store = createStore(reducer)

export default store;