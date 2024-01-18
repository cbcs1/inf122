import {Primero} from './components/primero.js';
import Segundo from './components/segundo.js';
import {Tercero} from './components/tercero.js';
import './App.css';


function App() {
  
  return (
    <div className="App">
      <div className='primero'>
          <Primero/>
     
      </div>
      <div className='segundo'>
        <Segundo/>  
        </div>       
        <div className='tercero'>
          <Tercero/>
          </div> 
    </div>
  )
}

export default App;
