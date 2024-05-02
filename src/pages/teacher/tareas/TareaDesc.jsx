import Popup from 'reactjs-popup';
import 'ldrs/ripples';
import { useState } from 'react';

export default function TareaDesc(props){

    const [feedback, setFeedback] = useState('Holiwis');

   
      return(
          <>
            <div className="flex justify-between bg-bwhite/[.60] p-5 m-5 rounded-lg text-dpurp">
                <div className="">
                    <h1>{props.tarea.nombre}</h1>
                    <p>{props.tarea.fecha}</p>
                    <p>Proiroidad:{props.tarea.priori}</p>
                    <p>Respuestas: {props.tarea.cantEntre}</p>
                </div>

                <div className={`border-2 border-dpurp ${props.tarea.cantEntre / props.cantAlu > 0.2 ? 'hover:bg-dpurp/30' : ''} flex justify-center p-2 rounded-lg`}>
                    <button disabled={((props.tarea.cantEntre / props.cantAlu) > 0.2) ? false : true } >
                        <p>Obtener Retro</p>
                        <p>{Math.floor(props.tarea.cantEntre / props.cantAlu * 100)}%</p>
                    </button>
                </div>
            </div>
        </>
    )
}