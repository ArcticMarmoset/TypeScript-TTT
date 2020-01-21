import OptionalString from "./OptionalString"

export interface HistorySnapshot {
    squares: OptionalString[],
    lastMove: string
}

export interface GameState {
    history: HistorySnapshot[],
    stepNumber: number,
    xIsNext: boolean
}
