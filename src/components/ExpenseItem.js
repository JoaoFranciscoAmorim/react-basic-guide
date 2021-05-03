import './ExpenseItem.css';
function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' })
  const day = props.date.toLocaleString('en-US', {day: '2-digit'})
  const year = props.date.getFullYear()
  return (
    <div className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}
/*o class do JavaScript, em react, virou className, principalmente para ser usado no css.
Usa-se {} para chamar uma constante ou variavel previamente criada.
Colocando o parâmetro props na função ExpenseItem, permite reutilizar os componentes e passar dados de outro componente (função App) para este componente (função ExpenseItem).
npm start para ver no chrome.*/
export default ExpenseItem;
