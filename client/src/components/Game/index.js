import React, { Component } from  "react";
// import Layout from "../components/Layout";

// The layout will likely end up beign defined on this page
//  The props are: rowLength, tileSize

class Game extends Component {
    render() {
        return (
            // <Layout></Layout>
            <div>
                <p>The game goes here.</p>
                <p>{this.props.rowLength} {this.props.tileSize}</p>
            </div>
        );
    }
};

export default Game;