import React from "react";
import "./ExpenseItem.css";

function ExpenseItem({ expense, onDelete }) {

  return (
    <div className="expense-item">
      <div>
        <h3>{expense.title}</h3>
        <p>{expense.date} — ₹{expense.amount.toFixed(2)}</p>
      </div>
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </div>
  );
}

export default ExpenseItem;
