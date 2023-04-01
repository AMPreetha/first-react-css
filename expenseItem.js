import './expense.css'
function ExpenseItem(){
    return (
      <div>
        <div>
          <h1 className="expense-item">Expense Item</h1>
        </div>
        <div>
          <p className="food">Food Rs 10</p>
        </div>
        <div>
          <p className="petrol">Petrol Rs 100</p>
        </div>
        <div>
          <p className="movies">Movies Rs 200</p>
        </div>
      </div>
    );
}
export default ExpenseItem;