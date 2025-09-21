import React from "react";
import "./ExpenseSummary.css";

function ExpenseSummary({ expenses }) {
  let total = 0;

  for ( let i=0; i<expenses.length; i++) {
    total += expenses[i].amount;
  }

  return (
    <div className="expense-summary">
      <h2>Total Spent: ₹{total.toFixed(2)}</h2>
    </div>
  );
}

export default ExpenseSummary;
