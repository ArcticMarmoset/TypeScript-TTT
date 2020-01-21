import { createStore, Store, Action } from "redux"
import { GameState } from "../types/GameState"
import rootReducer from "../reducers/rootReducer"

const store: Store<GameState, Action> = createStore(rootReducer)

export default store
