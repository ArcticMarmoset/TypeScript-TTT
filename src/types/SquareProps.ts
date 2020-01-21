import MakeMoveAction from "./MakeMoveAction"
import OptionalString from "./OptionalString"

interface SquareProps {
    onClick: () => MakeMoveAction,
    value: OptionalString
}

export default SquareProps
