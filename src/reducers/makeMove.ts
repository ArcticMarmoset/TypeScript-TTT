import { GameState } from "../types/GameState"
import MakeMoveAction from "../types/MakeMoveAction"
import calculateWinner from "../utils/calculateWinner"
import calculatePosition from "../utils/calculatePosition"

function makeMove(state: GameState, action: MakeMoveAction): GameState {
    const history = state.history.slice(0, state.stepNumber + 1)
    const current = history[state.stepNumber]
    const squares = current.squares.slice()
    const xIsNext = state.xIsNext
    const index = action.index

    if (index < 0 || index > 8) {
        console.error(new RangeError(`Index "i" is not within the range [0, 8] (was ${index})`))
        return state
    } else if (calculateWinner(squares) || squares[index]) {
        return state
    } else {
        squares[index] = xIsNext ? "X" : "O"

        return Object.assign({}, state, {
            history: history.concat([{
                squares: squares,
                lastMove: calculatePosition(index)
            }]),
            stepNumber: history.length,
            xIsNext: !xIsNext
        })
    }
}

export default makeMove
