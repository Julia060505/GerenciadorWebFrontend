import styled from 'styled-components';

export const Container = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
`

export const Form = styled.div`
        width: 50%;
`

export const Icons = styled.div`
       width: 100%;
       display: flex;
       justify-content: center;

       img{
               width: 50px;
               heigth: 50px;
               cursor: pointer;
               margin: 10px;
       }

       button{
               border: none;
               background: none;
       }

       .off{
               opacity: 0.4;
       }
`

export const Input = styled.div`
       width: 100%;
       display: flex;
       flex-direction: column;
       margin: 20px 0;

       input{
               font-size: 16px;
               padding: 15px;
               border: 2px solid  #784c53;
       }


       
`

export const TextArea = styled.div`
       width: 100%;
       display: flex;
       flex-direction: column;
       margin: 20px 0;

       input{
               font-size: 16px;
               padding: 15px;
               border: 2px solid  #784c53;
       }


       
`

export const Option =styled.div`
  display: flex;
  justify-content: space-between;

  button{
          font-weight: bold;
          color: #784c53;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 15px;

          &:hover{
                  opacity: 0.7;
          }
  }

  div{
          display: flex;
          align-items: center;
          color: #784c53;
          font-size: 15px;

  }


`

export const Save = styled.div`
 width: 100%;
 margin-top: 10px;

 button{
         width: 100%;
         background: #784c53;
         border: none;
         font-size: 15px;
         color: white;
         border-radius: 20px;
         cursor: pointer;
 }

`