import React from "react";
import "./index.css";

function clickMe(){
    alert(' direcciona a la pag de contacto emtek')
}
export const Button {
    return(
<div>
    <button className="animate__heartBeat" onClick={clickMe} style={(bg-blue)}>
        Contactanos
    </button>
</div>
    );
};