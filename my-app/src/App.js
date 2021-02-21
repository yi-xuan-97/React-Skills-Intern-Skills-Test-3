import logo from './logo.svg';
import './App.css';
import { About, Contact, Portfolio, Thoughts, Main, Nav, Social } from "./pages";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (


      <Router>

        <div>

          <Nav />

          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/main" component={Main} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/thoughts" component={Thoughts} />

          <Social/>

        </div>

      </Router>



  );
}

export default App;
