/* eslint-disable react/jsx-pascal-case */
import './App.css';
import Add from './components/Add';
import Delete from './components/Delete';
import Getdata from './components/Getdata'
import RealTimeData from './components/RealTimeData';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Getdata/> */}
        <Add />
        {/* <Delete /> */}
        <RealTimeData />
      </header>
    </div>
  );
}

export default App;
