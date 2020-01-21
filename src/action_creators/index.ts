import ActionTypes from "../actions/actionTypes"
import MakeMoveAction from "../types/MakeMoveAction"
import TimeTravelAction from "../types/TimeTravelAction"

export function makeMove(index: number): MakeMoveAction {
    return {
        type: ActionTypes.MAKE_MOVE,
        index: index
    }
}

export function timeTravel(step: number): TimeTravelAction {
    return {
        type: ActionTypes.TIME_TRAVEL,
        step: step
    }
}
