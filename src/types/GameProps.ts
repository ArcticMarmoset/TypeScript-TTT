import { GameState } from "./GameState"
import MakeMoveAction from "./MakeMoveAction"
import TimeTravelAction from "./TimeTravelAction"

interface GameProps extends GameState {
    makeMove: (index: number) => MakeMoveAction,
    timeTravel: (step: number) => TimeTravelAction
}

export default GameProps
