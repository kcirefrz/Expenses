import { ExpenseItem } from "./ExpenseItem";

import "../global.css";

interface IExpensesList {
  [items: string]: any;
}

export const ExpensesList = (props: IExpensesList) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map(
        (expense: {
          title: string;
          amount: number;
          date: Date;
          id: string;
        }) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      )}
    </ul>
  );
};
