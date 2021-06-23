import logo from './logo.svg';
import './App.css';
import FriendRecommendation from './pages/friend-recommendation';
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
      <FriendRecommendation />
    
    </div>
  );
}

export default App;
