import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./layout/Navigation";
import Home from "./pages/Home";
import "./sass/style.scss";

function App() {
  return (
  <>
  <Router>
    <Navigation />
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/projects">
        
      </Route>
      <Route path="/contact">
        
      </Route>
    </Switch>
  </Router>
  </>
  );
}

export default App;
