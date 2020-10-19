import React from "react";

export default function SaludoConstantes(props){

    console.log(props)

    return(
        <>
            <h3>Usando props de react con constantes</h3>
    <h3>El nombre es: {props.name} y su edad: {props.age}</h3>
        </>
    );
};