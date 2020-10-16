import React from "react";

export default function Saludar(props) {

    console.log(props);

    return (
        <div>
            <h3>Usando props de ReactJS</h3>
    <h3>Hola...{props.name}, tiene {props.edad} años</h3>
        </div>
    );
}