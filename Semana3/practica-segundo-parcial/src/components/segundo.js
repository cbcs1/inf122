import { useState } from "react";
import React from "react";

function Segundo (){
const[usuario, setUsuario]=useState("");
const[nombres, setNombres]=useState("");
const[edad, setEdad]=useState(0);
const addUsuario=(usuario)=>{
    setUsuario(usuario);
}
const addNombres=(nombres)=>{
    setNombres(nombres);
}
const addEdad=(edad)=>{
    setEdad(edad);
}
const [mostrar, setMostrar] = useState(false);
return(
    <div>
        <label>
            Usuario:  
        <input type="text"  onChange={e=>addUsuario(e.target.value)}/>
        </label>
        <label>
            Nombres:  
        <input type="text"  onChange={e=>addNombres(e.target.value)}/>
        </label>
        <label>
            Edad:  
        <input type="text"  onChange={e=>addEdad(e.target.value)}/>
        </label>
        
        <button onClick={e=>setMostrar(true)}>GENERAR</button>
       

        {mostrar && (
        <>
           <div>
            <h2>Sus datos requeridos:</h2>
            <p> Usuario:   {usuario}</p>
            <p>Nombres:   {nombres}</p>
            <p>Edad:   {edad}</p>
            
        </div>
        </>
      )}


    </div>

)


}
export default Segundo;