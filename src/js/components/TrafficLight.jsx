import React, { useState } from 'react';

const TrafficLight = () => {

    const [color, setColor] = useState("red");

    return (
        <div className="container">
        <div className="row">
            <div className="col-12 mt-3 d-flex flex-column align-items-center justify-content-center">

                {/*Poste negro*/}
                <div className="post">

                </div>

                {/*Cuerpo del semáforo*/}
                
                <div className="trafficlight_body">
                    {/* Luz roja del semaforo */}
                    <div
                        className={`red light ${color === 'red' ? 'on' : ''}`}
                        onClick={() => setColor("red")}
                    ></div>
                    {/* Fin Luz roja del semaforo */}

                    {/* Luz amarilla del semaforo */}
                    <div
                        className={`yellow light ${color === 'yellow' ? 'on' : ''}`}
                        onClick={() => setColor("yellow")}
                    ></div>
                    {/* Fin Luz amarilla del semaforo */}

                    {/* Luz verde del semaforo */}
                    <div
                        className={`green light ${color === 'green' ? 'on' : ''}`}
                        onClick={() => setColor("green")}
                    ></div>
                    {/* Fin Luz verde del semaforo */}
                </div>
            </div>
        </div>
    </div>

    );
};

export default TrafficLight;