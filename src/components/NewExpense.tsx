import { ExpenseForm } from "./ExpenseForm";
import { useState } from "react";

import "../global.css";

interface INewExpense {
  [onAddExpense: string]: any;
}

export const NewExpense = (props: INewExpense) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (
    enteredExpenseData: React.ChangeEvent<HTMLFormElement>
  ) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
