import { useParams } from "react-router";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from "react";
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

import CreateTarea from './CreateTarea'
import TareaDesc from "./TareaDesc";

export default function ClaseInfo(props){
    const { id } = useParams();

    const dummyClase = { nom: "Matematicas 2", cantAlu: 32, tarAct: 6,  };

    const dummyTareas = [{id:123, nombre:'Practica 1', priori:2, fecha:'00/00/0000', cantEntre: 12},
                         {id:124, nombre:'Practica 2', priori:3, fecha:'00/00/0000', cantEntre: 2}
    ]   

    const [clase, setClase] = useState(dummyClase);
    const [tareas, setTareas] = useState(dummyTareas);

    const [nombre, setNombre] = useState();
    const [desc, setDesc] = useState();
    const [priori, setPriori] = useState();
    const [fecha, setFecha] = useState();

    const handleNombre = (e) => setNombre(e.target.value);
    const handleDesc = (e) => setDesc(e.target.value);
    const handlePriori = (e) => setPriori(e.target.value);
    const handleFecha = (e) => setFecha(e.target.value);

    function createTarea(){
        const newTarea = { nombre, desc, priori, fecha };
        setTareas([...tareas, newTarea]);
    }


    const [clipboard, setClipboard] = useState('Copy to Clipboard')

    const arrowStyle = { color: '#250E47' }; 
    
    return(
        <>
            <div className="bg-mpurp h-screen">
                <div className="text-twhite p-5">
                <Link to={"/teacher"} className="hover:bg-dpurp/50 p-2 rounded-lg my-5 text-center" >{'< Retroceder'}</Link>

                    <h1 className="text-6xl">{clase.nom}</h1>

                    <p className="my-5 text-lg">{clase.cantAlu} Alumnos | {clase.tarAct} Tareas Activas</p>
                    
                    <div className="flex justify-between pr-5">
                        <div className="">
                            <div className="border-2 border-dpurp rounded-xl pl-2 flex text-2xl w-fit justify-center items-center">
                                <p className="pr-2 border-r-2 border-dpurp">Codigo de Inscripcion</p>
                                <CopyToClipboard
                                    text={id}
                                    >
                                    <Popup
                                        trigger={<button className="hover:bg-dpurp/[.5] p-2" onClick={() => setClipboard('Copeid!')}>{id}</button>}
                                        position={'top center'}
                                        on={['hover', 'focus']}
                                        {...{arrowStyle}}
                                        >
                                            <p className="bg-dpurp/80 text-twhite p-2 rounded-lg">{clipboard}</p>
                                    </Popup>
                                </CopyToClipboard>
                            </div>
                        </div>
    
                        <div className="items-center flex hover:bg-dpurp/50 rounded-full">
                            <Popup
                            modal
                            trigger={<button className="px-3 text-2xl rounded-full">+</button>} position="top left">
                                {close => (
                                    <div className="bg-bwhite text-dpurp rounded-lg p-5 flex flex-col justify-center items-center">
                                        <p className="text-4xl pb-4">Nueva Tarea</p>
                                        <div className="pb-4 flex flex-col">
                                            <label className="">Nombre</label>
                                            <input onChange={handleNombre} type="text" placeholder="Actividad 1" className="bg-twhite rounded-lg shadow-xl p-1" />
                                        </div>
                                        <div className="pb-4 flex flex-col">
                                            <label className="">Descripcion</label>
                                            <textarea onChange={handleDesc} type="text" placeholder="Ejercicios 1 a 10..." className="bg-twhite rounded-lg shadow-2xl p-1 resize-none h-20" />
                                        </div>
    
                                        <div className="pb-5 flex flex-col items-center">
                                            <label className="">Prioridad</label>
                                            <input onChange={handlePriori} type="number" min="1" max="5" placeholder="" className="bg-twhite rounded-lg shadow-xl p-1 w-1/4 text-center" />
                                        </div>
                                        <div className="pb-5 flex flex-col items-center">
                                            <label className="">Fecha de Entrega</label>
                                            <input onChange={handleFecha} type="date" placeholder="1" className="bg-twhite rounded-lg shadow-xl p-1 text-center" />
                                        </div>

                                        <button className="bg-dpurp p-2 text-twhite rounded-lg" onClick={() => {createTarea(); close();}}>
                                            <p>Sumbit</p>
                                        </button>
                                    </div>
                                )}
                            </Popup>
                        </div>
                    </div>

                    <div className="divider"></div>
                    {tareas.map((tarea) => {
                        return <TareaDesc key={tarea.id} tarea={tarea} cantAlu={clase.cantAlu} />;
                    })}
                </div>
            </div>
        </>
    )
}