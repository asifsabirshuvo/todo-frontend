import AllTodo from "./Todo/AllTodo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
       <Route path="/" exact component={AllTodo} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;