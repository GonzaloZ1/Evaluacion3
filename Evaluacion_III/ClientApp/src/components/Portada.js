import React, {useState, useEffect} from "react";

const Portada = () => {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-8">
                    <h1 className="text-center">Perfil</h1>
                    <div className="card mt-4">
                        <div className="card-header text-center">
                            <h2>Gonzalo Zamora</h2>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                Presentación personal
                            </h5>
                            <p className="card-text">
                                Técnico en mecánica industrial con mención en maquinas y herramientas,
                                con experiencias como alumno practicante en la maestranza MetalMec,
                                estudiando actualmente Analista Programador en el instituto profesional INACAP
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-8">
                    <h1 className="text-center">Habilidades</h1>
                    <ul className="list-group">
                        <li className="list-group-item">Hiperlaxitud</li>
                        <li className="list-group-item">Habilidad Numérica</li>
                        <li className="list-group-item">Adaptación</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Portada;