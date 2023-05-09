import React, {Component} from "react";
import Buy from "../buy/buy";
import "./card.css";

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state= {
            isBuy: false
        }
    }

    updateData = (value) => {
        this.setState({ isBuy: value })
    }

    render() {
        return (
                <div className={`card ${this.state.isBuy && "card-bg"}`}>
                    <img src={this.props.src} alt={this.props.alt} />
                    <div className="info">
                        <div className="info-first-cont">
                            <p className="gradient">{this.props.name}</p>
                            <div className="info-second-cont">
                                <p>
                                    <b>Страна:</b> {this.props.country}
                                </p>
                                <p>
                                    <b>Слоган:</b> <span className="tagline">{this.props.tagline}</span>
                                </p>
                                <p>
                                    <b>Жанр:</b> {this.props.genre}
                                </p>
                                <p>
                                    <b>Премьера:</b> {this.props.year}
                                </p>
                            </div>
                        </div>
                        <p className="oscar-gradient">
                            {
                                this.props.isOscar ? 
                                    `Лауреат «Оскара» - ${this.props.oscars} раза` 
                                    : ""
                            }
                        </p>
                    </div>
                    <Buy updateData={this.updateData}/>
                </div>
        )
    }
}