/* eslint-disable react/jsx-pascal-case */
import './App.css';
import Add from './firebaseTriturial/Add';
import Delete from './firebaseTriturial/Delete';
import Getdata from './firebaseTriturial/Getdata'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Getdata/>
        {/* <Add /> */}
        <Delete />
      </header>
    </div>
  );
}

export default App;
