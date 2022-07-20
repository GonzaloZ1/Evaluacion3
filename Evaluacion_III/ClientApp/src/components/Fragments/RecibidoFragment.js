import React, {useState, useEffect} from "react";

const RecibidoFragment = (mensajes) => {
    return (
        <>
            <tr>
                <td>{mensajes.nombre}</td>
                <td>{mensajes.reaccion}</td>
                <td>{mensajes.mensaje}</td>
            </tr>
        </>
    )
}

export default RecibidoFragment;