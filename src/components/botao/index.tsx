import React from 'react';
import Style from'./style.module.scss'
//começar com letra maiuscula
// const backgroundColor = 'red';
//inline style: style={{backgroundColor}}

/*
prop pode ser assim dependedo da versão do react:
class Botao extends React.Component {
    render() {
        return(
            <button className={Style.botao}>
                {this.props.children}
            </button>
        )
    }
}
e lá no form, chamar o botão assim:
<botao>Adicionar</botao>
ou assim:
*/
interface Props{
    children?: React.ReactNode, 
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void //quando tiver o ? antes : significa que não é obrigatório, pode passar ou não
}
function Botao({ onClick, type, children }: Props){
    return(
        <button onClick={onClick} type={type} className={Style.botao}>
            {children}
        </button>
    )
}

export default Botao;