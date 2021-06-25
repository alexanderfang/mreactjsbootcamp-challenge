import logo from './logo.svg';
import './App.css';
import FriendRecommendation from './pages/friend-recommendation';
import FriendRecommendationFunction from './pages/friend-recommendation-function';
import {Container, Navbar} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          Social Media
          </Navbar.Brand>
        </Container>
      </Navbar>
      <FriendRecommendationFunction />
    
    </div>
  );
}

export default App;
