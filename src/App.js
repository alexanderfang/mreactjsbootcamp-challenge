import logo from './logo.svg';
import './App.css';
import FriendRecommendation from './pages/friend-recommendation';
import FriendRecommendationFunction from './pages/friend-recommendation-function';
import Pokemon from './pages/Pokemon';
import PokemonDetail from './pages/PokemonDetail'
import {Container, Navbar} from 'react-bootstrap'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar variant="dark">
            <Container>
              <Navbar.Brand href="/">
              Pokemon
              </Navbar.Brand>
              <Link to="/">Home</Link> {" "}
            </Container>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Pokemon} />
            <Route path="/poke/:id" component={PokemonDetail} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
