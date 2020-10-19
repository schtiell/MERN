import React from "react";

export default function SaludoConstantesObjetos(props){

    //Información del objeto en consola
    console.log(props.info.user);
    console.log(props.info.color);
    console.log(props.info.direccion);

    return(
        <>
            <h3>El nombre es: {props.info.user}, su color favorito {props.info.color} y vive en {props.info.direccion}</h3>
        </>
    );
};