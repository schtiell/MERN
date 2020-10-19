import React from "react";

export default function SaludoConstantes(props){

    //console.log(props);
    console.log(props);

    return(
        <div>
            <h2>El nombre {props.name} y su edad: {props.age}</h2>
        </div>
    );
};