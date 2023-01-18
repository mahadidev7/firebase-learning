/* eslint-disable react/jsx-pascal-case */
import './App.css';
import Add from './components/Add';
import Delete from './components/Delete';
import Getdata from './components/Getdata'
import Ordering from './components/Ordering';
import Queries from './components/Queries';
import RealTimeData from './components/RealTimeData';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Getdata/> */}
        <Add />
        {/* <Delete /> */}
        {/* <RealTimeData /> */}
        {/* <Queries /> */}
        <Ordering />
      </header>
    </div>
  );
}

export default App;
