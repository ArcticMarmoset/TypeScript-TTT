import OptionalString from "./OptionalString"
import MakeMoveAction from "./MakeMoveAction"

interface BoardProps {
    onClick: (index: number) => MakeMoveAction,
    squares: OptionalString[]
}

export default BoardProps
