import { GameState } from "../types/GameState"
import TimeTravelAction from "../types/TimeTravelAction"

function timeTravel(state: GameState, action: TimeTravelAction): GameState {
    const step = action.step
    const lowerBound = 0
    const upperBound = state.history.length - 1

    if (step < lowerBound || step > upperBound) {
        console.error(new RangeError(`TIME_TRAVEL action property "step" is out of bounds (was ${step})`))
        return state
    } else {
        return Object.assign({}, state, {
            stepNumber: step,
            xIsNext: step % 2 === 0
        })
    }
}

export default timeTravel
