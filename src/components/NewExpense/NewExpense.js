import "./NewExpense.css";
import React, { useState } from 'react';
function NewExpense(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value)
  };
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value)
  };
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value)
  };
  function submitHandler(event) {
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onAddExpense(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}></input>
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
          </div>
          <div className='new-expense__actions'>
              <button type="submit">Add Expense</button>
          </div>
          </div>
      </form>
    </div>
  );
}
/*-O evento onChange sempre lê uma string quando é efetuado.
-É possível ter vários States ao mesmo tempo.
-O App.js é o parent e o NewExpense.js é o child. Para passar do child para o parent, colocar o props.onAddExpense(expenseData) e chamar o onAddExpense no App.js (parent).*/
export default NewExpense;
