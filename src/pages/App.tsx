import React, { useState } from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import { iTarefa } from '../types/tarefa';
import Style from './App.module.scss';
//usando o module evita sobreposição de estilizacao

//para chamar a clase no html, tem que usar className

function App() {
  //     padrão, função do estado
  const [tarefas, setTarefas] = useState<iTarefa[] | []>([]);//<iTarefa[] | []> significa que pode ser vazio
  //trouxemos esse const para cá, pq precisamos acrescentar informação vinda do form na lista
  const [selecionado, setSelecioando] = useState<iTarefa>();

  function selecionaTarefa(tarefaSelecionada: iTarefa){
    setSelecioando(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefa(){
    if(selecionado){
      setSelecioando(undefined)
      setTarefas(tarefasAnterioes => tarefasAnterioes.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      }))
    }
  }
  return (
    <div className={Style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa} 
      />
    </div>
  );
}
export default App;
