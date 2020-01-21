import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import Game from "./components/Game"
import "./styles.scss"
import store from "./store/store"

const rootElement = document.getElementById("root")

render(
    (
        <Provider store={store}>
            <Game />
        </Provider>
    ),
    rootElement
)
