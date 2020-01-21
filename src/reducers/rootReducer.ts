import { Action } from "redux"
import ActionTypes from "../actions/actionTypes"
import makeMove from "./makeMove"
import timeTravel from "./timeTravel"
import initialState from "../store/initialState"
import { GameState } from "../types/GameState"
import MakeMoveAction from "../types/MakeMoveAction"
import TimeTravelAction from "../types/TimeTravelAction"

function rootReducer(state: GameState = initialState, action: Action): GameState {
    switch (action.type) {
        case ActionTypes.MAKE_MOVE:
            return makeMove(state, action as MakeMoveAction)
        case ActionTypes.TIME_TRAVEL:
            return timeTravel(state, action as TimeTravelAction)
        default:
            return state
    }
}

export default rootReducer
