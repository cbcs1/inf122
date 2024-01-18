import './App.css';
import Boton from './components/Boton';
import Contador from './components/contador';
import { useState } from 'react';


function App() {
  const[nroClick, setNumClick]=useState(0);
  const click =()=>{setNumClick(nroClick+1);
  console.log("click!");}
  const reiniciar =()=>{setNumClick(0); 
  console.log("restart");}
 
  const clickplus3 =()=>{setNumClick(nroClick+3)};
  const clickplus1 =()=>{setNumClick(nroClick+1)};
  const clickminus3 =()=>{setNumClick(nroClick-3)};
  const clickminus1 =()=>{setNumClick(nroClick-1)};
  return (
   
    
    <div className="App">
     
        <div className='principal'>
        <Contador nroClick={nroClick}/>
          <div className='botones'>
            <Boton texto="Clickeame" esBotonClick={true} funcionClick={click}/>
            <Boton texto="Reinicio" esBotonClick={false} funcionClick={reiniciar}/>
              </div>

              <div className='numeros'>
                <Boton texto="+3" esBotonClick={true} funcionClick={clickplus3}/>

                <Boton texto="-3" esBotonClick={true} funcionClick={clickminus3}/>

                <Boton texto="+1" esBotonClick={true} funcionClick={clickplus1}/>

                <Boton texto="-1" esBotonClick={true} funcionClick={clickminus1}/>

              </div>
        </div>
     
    </div>
  );
}

export default App;
