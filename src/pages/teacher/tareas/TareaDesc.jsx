import Popup from 'reactjs-popup';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { saveAs } from "file-saver";
import 'ldrs/ripples';
import { useState } from 'react';

export default function TareaDesc(props){

    const [feedback, setFeedback] = useState('Holiwis');
   
    const getRetro = () => {
       const googleApiKey = "AIzaSyBXEn_QSHT40vlGfPoTpQhadfE44Vk-NkU";
       
       try{
         const genAI = new GoogleGenerativeAI(googleApiKey);
      
         async function run() {
           // For text-only input, use the gemini-pro model
           const model = genAI.getGenerativeModel({ model: "gemini-pro"});
         
           const prompt = "Genera la retroalimentacion de una tarea"
         
           const result = await model.generateContent(prompt);
           const response = await result.response;
           const text = response.text();
           console.log(text);

           var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
           saveAs(blob, "retro.txt");
         }
         
         run();
       }
       catch(error){
            console.log(error);
       }
    }
   
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
                    <button disabled={((props.tarea.cantEntre / props.cantAlu) > 0.2) ? false : true } onClick={getRetro}>
                        <p>Obtener Retro</p>
                        <p>{Math.floor(props.tarea.cantEntre / props.cantAlu * 100)}%</p>
                    </button>
                </div>
            </div>
        </>
    )
}