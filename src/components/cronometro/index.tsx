import { useEffect, useState } from 'react';
import Botao from "../botao";
import Relogio from "./Relogio";
import Style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/date";
import { iTarefa } from "../../types/tarefa";

interface Props{
    selecionado: iTarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: Props){
    const [tempo, setTempo] = useState<number>();
    //sempre que o selecionado mudar, ele vai executar o useEffect
    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    function regressiva(contador: number = 0){
        setTimeout(()=>{
            if(contador > 0){
                setTempo(contador - 1);
                return regressiva(contador - 1)
            }
            finalizarTarefa();
        }, 1000)
    }
    return(
        <div className={Style.cronometro}>
            <p className={Style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={Style.relogioWrapper}>
                <Relogio tempo={tempo}></Relogio>
            </div>
            <Botao 
                children="Começar"
                onClick={()=> regressiva(tempo)}
            />
        </div>
    )
}