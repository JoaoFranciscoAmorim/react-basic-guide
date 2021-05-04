import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const month = props.date.toLocaleString('en-US', { month: 'long' })
  const day = props.date.toLocaleString('en-US', {day: '2-digit'})
  const year = props.date.getFullYear()
  function clickHandler() {
    setTitle('Updated!') // executa o "retorno" da função ExpenseItem novamente
  
  }
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{title}</h2>
      <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
    
  );
}
/*-O class do JavaScript, em react, virou className, principalmente para ser usado no css.
-Usa-se {} para chamar uma constante ou variavel previamente criada.
-Colocando o parâmetro props na função ExpenseItem, permite reutilizar os componentes e passar dados de outro componente (função App) para este componente (função ExpenseItem).
-Eventos, como button, requerem um eventlistener, como onClick, que, por sua vez, pedem uma função (criada previamente e apenas chamada no eventlistener) que será executada quando o eventlistener ocorrer.
-A função useState deve ser chamada dentro da função de componentes.
-const [title, setTitle] = useState(props.title); cria, em uma lista, a variável title e a função setTitle, que podemos chamar posteriormente para criar um novo título, ou seja, atualizá-lo.
-npm start para ver no chrome.*/
export default ExpenseItem;
