import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './component/Login/Login';

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route>
              <Login></Login>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
