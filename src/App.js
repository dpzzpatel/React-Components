import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function App() {
  return (
    <Container className="mt-5">
      <ul>
        <li><Link to="/interactiveratingcompnent"> Interactive Rating Component</Link></li>
      </ul>
    </Container>
  );
}

export default App;
