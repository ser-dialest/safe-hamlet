import React, { Component } from "react";
import Game from "./components/Game/";
import './App.css';
import background1 from "./assets/images/Background1.png";
import background2 from "./assets/images/Background2.png";
import background3 from "./assets/images/Background3.png";
import rightBorder1 from "./assets/images/RightBorder1.png";
import rightBorder2 from "./assets/images/RightBorder2.png";
import rightBorder3 from "./assets/images/RightBorder3.png";
import leftBorder1 from "./assets/images/LeftBorder1.png";
import leftBorder2 from "./assets/images/LeftBorder2.png";
import leftBorder3 from "./assets/images/LeftBorder3.png";

class App extends Component {
  constructor(props) {
    super(props);

    // rowLength determines the number of tiles that will be rendered. Either 19, 17, or 15
    // tileSize determines whether each tile will be 16, 32, or 48 pixels (for 1, 2, or 3, respectively)
    this.state = { rowLength: 19, tileSize: 3 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  // multiplier for tile size 
  tileBase = 16;
  maximumTile = 3;
  minimumTile = 1;

  // number of tiles in row for playable game
  // To have a central camera position, it must always be odd
  maximumRow = 19;
  minimumRow = 15;

  // arrays of images to be called dynamically
  background = [undefined, background1, background2, background3];
  rightBorder = [undefined, rightBorder1, rightBorder2, rightBorder3];
  leftBorder = [undefined, leftBorder1, leftBorder2, leftBorder3];

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    const width = window.innerWidth;
    const currentSize = this.state.rowLength * this.state.tileSize * this.tileBase
    if (width < currentSize) {
      if (this.state.rowLength > this.minimumRow) { 
        this.setState({ rowLength: this.state.rowLength - 2 }, () => this.updateWindowDimensions());
      } else if (this.state.tileSize > this.minimumTile) {
        this.setState({ rowLength: this.maximumRow, tileSize: this.state.tileSize - 1 }, () => this.updateWindowDimensions());
      }
    } else if (width > currentSize) {
      if (this.state.rowLength < this.maximumRow && width >= (this.state.rowLength + 2) * this.state.tileSize * this.tileBase) {
        this.setState({ rowLength: this.state.rowLength +2 }, () => this.updateWindowDimensions());
      } else if (this.state.tileSize < this.maximumTile && width >= this.minimumRow * (this.state.tileSize + 1) * this.tileBase) {
        this.setState({ rowLength: this.minimumRow, tileSize: this.state.tileSize + 1 }, () => this.updateWindowDimensions());
      }
    }
  }

  render() {
    const tilePixels = this.state.tileSize * this.tileBase;

    return (
      <div 
        id='layout'
        style={{gridTemplateColumns: `1fr ${tilePixels}px ${this.state.rowLength * (tilePixels - 2)}px ${tilePixels}px 1fr`}}
      >
        <div 
          className="sides"
          style={{backgroundImage: `url(${this.background[this.state.tileSize]})`}}
        />
        <div 
          className="sides"
          style={{backgroundImage: `url(${this.leftBorder[this.state.tileSize]})`}}
        />
        <Game
          rowLength={this.state.rowLength}
          tileSize={this.state.tileSize}
        />
        <div 
          className="sides"
          style={{backgroundImage: `url(${this.rightBorder[this.state.tileSize]})`}}
        />
        <div 
          className="sides" 
          style={{backgroundImage: `url(${this.background[this.state.tileSize]})`}}
        />
      </div>
    );
  }
}

export default App;
