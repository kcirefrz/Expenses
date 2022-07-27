import { Card } from "./Card";
import { ExpenseDate } from "./ExpenseDate";

import "../global.css";

interface IExpenseItem {
  /*id: string;*/
  date: Date;
  title: string;
  amount: number;
}

export const ExpenseItem = (props: IExpenseItem) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};
