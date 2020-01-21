import { Action } from "redux"

interface TimeTravelAction extends Action {
    step: number
}

export default TimeTravelAction
