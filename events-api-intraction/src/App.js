import logo from './logo.svg';
import './App.css';
import Vote from './components/Vote';

function App() {
  return (
    <div className="App">
      <Vote totalGlobalLikes={8} />
    </div>
  );
}

export default App;
