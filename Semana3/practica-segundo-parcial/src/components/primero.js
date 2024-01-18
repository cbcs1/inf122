import { useState } from "react";

export const Primero=()=>{

    const [mostrar, setMostrar] = useState(false);
    return(
        <div>
        <button onClick={() => setMostrar((mostrar) => !mostrar)}> CLICK ACA</button>
        {mostrar ? <h1>APAREZCO CUANDO ME HACEN CLIC :P</h1> : null}
        </div>
        )
}