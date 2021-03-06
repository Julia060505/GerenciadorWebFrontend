import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background:#000000;

    border-bottom: 6px solid #784c53;

`
export const Menu = styled.div`
    width:50%;
    height: 70px;
    display: flex;
    align-items: center;
    
    a{
        color:#FFF; 
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;
    }

    .barra::after{
        content: "|";
        margin: 0 10px;
        color: #FFF;
    }

    a:hover{
        color:#784c53;
    }


`
