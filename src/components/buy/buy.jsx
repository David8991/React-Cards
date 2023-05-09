import React, {Component} from "react";
import "./buy.css"

export default class Buy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isBuy: true
        }
    }

    bought = () => {
        this.setState({
            isBuy: false
        });
        this.props.updateData(this.state.isBuy)
    }

    notBought = () => {
        this.setState({
            isBuy: true
        });
        this.props.updateData(this.state.isBuy)
    }

    render() {
        return (
            <div className="button-cont">
                <button onClick={this.state.isBuy ? this.bought : this.notBought}>
                    {this.state.isBuy ? "Купить" : "В корзине"}
                </button>
            </div>
        )
    }
}