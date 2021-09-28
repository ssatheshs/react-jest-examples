import logo from './logo.svg';
import './App.css';
import Table from './components/Table'
import fakeEmployees from './mocks/employees'

const App = () => <Table  employees= { fakeEmployees }/>

export default App;
