import React, { Component } from "react";
import "./style.css";

class Tile extends Component {
    state = {
        cursor: "none"
    };
    
    hoverOn() {
        this.setState({cursor:"inline-grid"});
    };

    hoverOff() {
        this.setState({cursor:"none"});
    };

    render () {
        return (
            <div 
                id={this.props.id}
                className="gridSquare"
                style={{
                    gridColumnStart:`${this.props.column}`,
                    gridRowStart:`${this.props.row}`,
                }}
                onMouseEnter={() => this.hoverOn()}
                onMouseLeave={() => this.hoverOff()}
                // onClick={this.props.click}
            >
                <img 
                    alt="map" 
                    src={require("./assets/images/" + this.props.name + this.props.tileSize + ".png")}
                    style={{
                        // top:`${this.props.top}px`,
                        // left:`${this.props.left}px`,
                        position:"relative",
                        display: "inline-grid"
                    }}
                />
                <img
                    className="cursor"
                    src={require("./assets/images/Highlight" + this.props.tileSize + ".png")}
                    alt=""
                    style={{
                        display:this.state.cursor,                        
                    }}
                />
            </div>
        );
    };
};

export default Tile;