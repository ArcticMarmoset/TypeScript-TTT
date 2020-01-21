import React from "react"
import SquareProps from "../types/SquareProps"

function Square(props: SquareProps) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square
