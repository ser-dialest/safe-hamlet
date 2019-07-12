import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Game from "./pages/Game"

function App() {
  return (
    <div id='layout'>
      <div className='sides'></div>
      <div className="sides left-border"></div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Game} />
          </Switch>
        </div>
      </Router>
      <div className="sides right-border"></div>
      <div className='sides'></div>  
    </div>
  );
}

// Add additional pages to the Switch as necessary
// The column layout is added here as it will not be impacted by any other page or component

export default App;
