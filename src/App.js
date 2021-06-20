import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import FriendDetail from './components/FriendDetail/FriendDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/friend/:friendId">
          <FriendDetail/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
      </Router>
    
  );
}

export default App;
