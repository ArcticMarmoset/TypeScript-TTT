import { GameState } from "../types/GameState"

const initialState: GameState = {
    history: [{
        squares: Array(9).fill(null),
        lastMove: ""
    }],
    stepNumber: 0,
    xIsNext: true
}

export default initialState
