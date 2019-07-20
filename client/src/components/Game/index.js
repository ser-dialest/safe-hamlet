import React, { Component } from  "react";
import PlayField from "../PlayField";
import map from "./mapArray";
import "./style.css";


class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            camera: [0,0],
        }
    }

    render() {
        return (
            <div
                id="game"
            >
                <PlayField 
                    rowLength={this.props.rowLength}
                    columnLength={this.props.columnLength}
                    tileSize={this.props.tileSize}
                    tileBase={this.props.tileBase}
                    camera={this.state.camera}
                    map={map}
                />
                <p>Here is some text</p>
            </div>
        );
    }
};

export default Game;