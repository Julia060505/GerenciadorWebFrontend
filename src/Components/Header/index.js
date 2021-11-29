import React from 'react'
import * as Styled from './styles'
import { Link } from 'react-router-dom';


function Header(){
    return (
        
        <Styled.Container>
            <Styled.Menu>
                <Link to="/">Página Inicial</Link>
                    <span className="barra"  />
                <Link to= "/task">Cadastro de Tarefas</Link>
            </Styled.Menu>
        </Styled.Container>

    )

}


export default Header;