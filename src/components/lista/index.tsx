import React from "react";
import lista from './lista.module.scss';
import Item from './Item/index';
import { iTarefa } from "../../types/tarefa";

interface Props{
    tarefas: iTarefa[],
    //                                void = retorna nada
    selecionaTarefa: (tarefaSelecionada: iTarefa) => void 
}

//estado/state é uma variável para avisar o react que o componente mudou
//utilizando function components invés de class components
function Lista({ tarefas, selecionaTarefa}: Props){
    
    return(
        <aside className={lista.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(item=>(
                    <Item
                        selecionaTarefa ={selecionaTarefa}
                        key={item.id}
                        {...item}
                        //ou
                        //tarefa={item.tarefa}
                        //tempo={item.tempo}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;