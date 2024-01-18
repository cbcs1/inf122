import '../style/Contador.css';
import React from 'react';


function Contador({nroClick}){
    return (
        <div className='Contador'>
            {nroClick}

        </div>

    );

}
export default Contador;