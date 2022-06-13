import React from 'react'
import ReactDOM from 'react-dom'
import ClickCounter from "./clickCounter.jsx"

document.addEventListener("DOMContentLoaded", () => {

    const root = document.getElementById("root");
    ReactDOM.render(<ClickCounter />, root);

})