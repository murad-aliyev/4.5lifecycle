import React, { Component } from "react";
import "./Cycle.css"

class Cycle extends Component {
    state = {
        from: "",
        to: "",
        amount: "",
        lastkey: null,
        className: "main"
    }
    
    getData = () => {
        fetch("https://acb-api.algoritmika.org/api/transaction")
            .then(r => r.json())
            .then(data => this.setState({ from: data[0].from, to: data[0].to, amount: data[0].amount }))
    }

    onKeypress = (e) => {
        this.setState({ lastkey: e.key })
        if (e.key === "1") {
            this.state.className = "main-1";
        } else if (e.key === "2") {
            this.state.className = "main-2";
        } else {
            this.state.className = "main";
        }
    }

    componentDidMount() {
        this.getData()
        window.addEventListener("keypress", this.onKeypress)
    }
    render() {
        const {className} = this.state
        return (
            <div className={className}>
                <p>Göndərən:{this.state.from}</p>
                <p>Alan:{this.state.to}</p>
                <p>Məbləğ:{this.state.amount}</p>
            </div>
        )
    }
}
export default Cycle