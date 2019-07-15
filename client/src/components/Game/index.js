import React, { Component } from  "react";
// import Layout from "../components/Layout";

// The layout will likely end up beign defined on this page

class Game extends Component {
    render() {
        // this.butts();
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