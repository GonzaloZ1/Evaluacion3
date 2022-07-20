import React, {useState, useEffect} from "react";
import EnviarFragment from "./Fragments/EnviarFragment";
import RecibidoFragment from "./Fragments/RecibidoFragment";

const MensajePorDefecto = [
    {nombre: "Juan", mensaje: "Hola", like: false, saludo: true, reaccion: "👋"},
    {nombre: "Pedro", mensaje: "Todo bien", like: true, saludo: false, reaccion: "👍"}
]

const Mensaje = () => {

    const [mensajes, setMensajes] = useState(MensajePorDefecto);
    const [nombre, setNombre] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [like, setLike] = useState(false);
    const [saludo, setSaludo] = useState(false);
    
    const handleNombre = (evento) => {
        setNombre(evento.target.value)
    }
    const handleMensaje = (evento) => {
        setMensaje(evento.target.value)
    }
    const handleLike = (evento) => {
        setLike(!like)
    }
    const handleSaludo = (evento) => {
        setSaludo(!saludo)
    }
    
    const handleSaludar = () => {
        if (nombre != "" && mensaje != "") {
            let copiaMensajes = [...mensajes];
            let reac = "";
            if (like === true && saludo === true) {
                reac = "👋👍";
            }else if (like === true) {
                reac = "👍";
            }else if (saludo === true) {
                reac = "👋";
            }else {
                reac = "Ninguno";
            }
            const nuevoMensaje = {
                nombre: nombre,
                mensaje: mensaje,
                like: like,
                saludo: saludo,
                reaccion: reac
            }
            copiaMensajes.push(nuevoMensaje);
            setMensajes(copiaMensajes);
        }else {
            alert("Debes rellenar todos los campos");
        }
    }
    
    return (
        <>
            <div className="row">
                <div className="col-5">
                    <EnviarFragment
                        nombre={nombre}
                        mensaje={mensaje}
                        like={like}
                        saludo={saludo}
                        handleNombre={handleNombre}
                        handleMensaje={handleMensaje}
                        handleLike={handleLike}
                        handleSaludo={handleSaludo}
                        handleSaludar={handleSaludar}
                    />
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-12">
                    <h1>Mensaje recibidos</h1>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Reacciones</th>
                            <th>Mensaje</th>
                        </tr>
                        </thead>
                        <tbody>
                    {mensajes.map((msj) => {
                        return (
                            <RecibidoFragment nombre={msj.nombre} mensaje={msj.mensaje} like={msj.like} saludo={msj.saludo} reaccion={msj.reaccion}/>
                        )
                    })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Mensaje;