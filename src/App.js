import { BrowserRouter as Router } from 'react-router-dom';
import Main from './pages/Main/Main.jsx';

function App() {
  return (
    <Router>
      <Main path="/" component={Main} />
    </Router>
  );
}

export default App;
