import React, { Component } from "react";
import Tile from "../Tile";
import "./style.css";

class PlayField extends Component {
    constructor(props) {
        super(props);
        // props are rowLength columnLength tileSize camera map
        this.state = {
        }
    }

    render() {
        const viewable = []
        // Block that defines every tile in the map
        for (let x = 0;  x < this.props.rowLength; x++) {
            for (let y = 0; y < this.props.columnLength; y++) {
                const displayX = x + this.props.camera[0];
                const displayY = y + this.props.camera[1];
                const id = "x" + displayX + "y" + displayY;
                const name = this.props.map[displayX][displayY].name;
                
                viewable.push(
                    <Tile 
                        id={id}
                        key={id}
                        className="tile"
                        column={x+1}
                        row={y+1}
                        name={name}
                        tileSize={this.props.tileSize}
                    />
                );
            }
        }

        const pixels = this.props.tileBase * this.props.tileSize
        return(
            <div id="play"
                style={{
                    top: `${-1 * pixels}px`,
                    left: `${-1 * pixels}px`,
                    gridTemplate: `repeat(${this.props.columnLength}, ${pixels}px) / repeat(${this.props.rowLength}, ${pixels}px)`
                }}
            >
                {viewable}
            </div>
        )
    };
}

export default PlayField;