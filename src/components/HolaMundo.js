import React from "react";

//El nombre de la funcion debe ser igual al nombre del componente
//Debe iniciar en mayusculas
export default function HolaMundo(){

    //return solo puede retornar un objeto
    //el div, contiene otros elementos dentro pero al final es un solo objeto div
    //Se puede utilizar fragment si no se quiere usar el <div>....</div>, <> ... </>
    return(
        <div>
            <h1>Hola Mundo!!!</h1>
            <h2>Mi primer componente creado con ReactJS</h2>  
            <h3>Realizando pruebas...</h3>
        </div>
    );
}

//Nuevo Componente
//Lo correcto es que cada componente esté por separado, Adios.js dentro del directorio components
export function Adios(){
    return(
        <div>
            <h4>Adios....</h4>
        </div>
    );
}

//El componente debe exportarse como se realizó o bien...
//export default HolaMundo;