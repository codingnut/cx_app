import ExpenseDate  from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(myprops) {
  return (
    <div className="expense-item">
      <ExpenseDate date={myprops.date} />
      <div className="expense-item__description">
        <h2>{myprops.title}</h2>
        <div className="expense-item__price">${myprops.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
