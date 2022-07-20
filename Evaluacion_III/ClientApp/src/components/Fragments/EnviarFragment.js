import React, {useState, useEffect} from "react";

const EnviarFragment = ({nombre, mensaje, like, saludo, handleNombre, handleMensaje, handleLike, handleSaludo, handleSaludar}) => {
    return (
        <>
            <h1>Enviar mensaje</h1>
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input 
                type="text" 
                className="form-control"
                value={nombre}
                onChange={handleNombre}
                name="nombre" 
                id="nombre" 
            />
            <label htmlFor="mensaje" className="form-label mt-4">Mensaje</label>
            <textarea 
                className="form-control"
                value={mensaje}
                onChange={handleMensaje}
                name="mensaje" 
                id="mensaje" 
                rows="3" 
            />
            <div>
                <div className="form-check form-check-inline mt-4">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={like}
                        onChange={handleLike}
                        name="like"
                        id="like"
                    />
                    <label htmlFor="like" className="form-check-label">Dar like 👍</label>
                </div>
                <div className="form-check form-check-inline mt-4">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={saludo}
                        onChange={handleSaludo}
                        name="saludo"
                        id="saludo"
                    />
                    <label htmlFor="saludo" className="form-check-label">Enviar saludo 👋</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-2" onClick={handleSaludar}>Enviar</button>
        </>
    )
}

export default EnviarFragment;