import "./NewExpense.css";

function NewExpense() {
  return (
    <div className="new-expense">
      <form>
          <div className='tit'>
            <label>Title</label>
            <input type="text"></input>
          </div>
          <div className='tit'>
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01"></input>
          </div>
          <div className='tit'>
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31"></input>
          </div>
          <div>
              <button type="submit">Add Expense</button>
          </div>
      </form>
    </div>
  );
}

export default NewExpense;
