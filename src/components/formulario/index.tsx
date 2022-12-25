import React, { useState } from "react";
import { iTarefa } from "../../types/tarefa";
import Botao from "../botao";
import Form from './form.module.scss';
import {v4 as uuidv4} from 'uuid';
//se tiver hifen {style["nova-classe"]}

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<iTarefa[]>>
}

function Formulario({setTarefas}: Props){
    const [tarefa, setTarefa] = useState("")
    const [tempo, setTempo] = useState("00:00")
    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        //aqui ele está passando para as tarefas antigas a nova tarefa
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()//gera um id aleatório
                }
            ]
        )
        //resetando o form
        setTarefa("")
        setTempo("00:00")
    }
    return(
        <form className={Form.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={Form.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input type="text" 
                value={tarefa} 
                onChange={evento => setTarefa(evento.target.value)}
                name="tarefa" id="tarefa" placeholder="O que você quer estudar?" required/>
            </div>
            <div className={Form.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input type="time" 
                value={tempo} 
                onChange={evento => setTempo(evento.target.value)} 
                name="tempo" id="tempo" step="1" min="00:00:00" max="01:30:00" required />
            </div>
            <Botao 
                children="Adicionar" type="submit"
            />
        </form>
    )
}

export default Formulario;