//a partir da ver 17 não precisa importar o react
import { iTarefa } from '../../../types/tarefa';
import lista from './Item.module.scss';

interface Props extends iTarefa {
    selecionaTarefa: (tarefaSelecionada: iTarefa) => void
}

export default function item(
    {
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id, 
        selecionaTarefa
    }: Props){
    return(
        <li className={`${lista.item} ${selecionado ? lista.itemSelecionado : ''} ${completado ? lista.itemCompletado : ''}`} 
            onClick={() => !completado && selecionaTarefa({
                tarefa,
                tempo,
                selecionado, 
                completado, 
                id
            })}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={lista.concluido} aria-label='tarefa completada'></span>}
        </li>
    )
}