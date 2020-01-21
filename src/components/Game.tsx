import React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import Board from "./Board"
import GameProps from "../types/GameProps"
import { HistorySnapshot, GameState } from "../types/GameState"
import OptionalString from "../types/OptionalString"
import calculateWinner from "../utils/calculateWinner"
import { makeMove, timeTravel } from "../action_creators"

function ReactGame(props: GameProps) {
    const history: HistorySnapshot[] = props.history
    const current: HistorySnapshot = history[props.stepNumber]
    const winner: OptionalString = calculateWinner(current.squares)
    const xIsNext: boolean = props.xIsNext

    const moves = history.map((_, move: number) => {
        const desc: string = move ?
            "Move #" + move + " (" + history[move].lastMove + ")" :
            "Game start"

        const style: React.CSSProperties = move === props.stepNumber ?
            { fontWeight: "bold" } :
            { fontWeight: "normal" }

        return (
            <li key={move}>
                <button style={style} onClick={() => props.timeTravel(move)}>
                    {desc}
                </button>
            </li>
        )
    })

    const isFilled: boolean = current.squares.every((square) => square !== null)
    const status: string = ((): string => {
        if (winner) {
            return `Winner: ${winner}`
        } else if (!isFilled) {
            return `Next player: ${xIsNext ? "X" : "O"}`
        } else {
            return "Draw!"
        }
    })()

    return (
        <div className="game-container">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={(index: number) => props.makeMove(index)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

function mapStateToProps(state: GameState): GameState {
    const { history, stepNumber, xIsNext } = state
    return { history, stepNumber, xIsNext }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        makeMove: (index: number) => dispatch(makeMove(index)),
        timeTravel: (step: number) => dispatch(timeTravel(step))
    }
}

const Game = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReactGame)

export default Game
