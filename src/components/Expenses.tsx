import { useState } from "react";
import { Card } from "./Card";
import { ExpensesList } from "./ExpensesList";
import { ExpensesFilter } from "./ExpensesFilter";
import { ExpensesChart } from "./ExpensesChart";

import "../global.css";

interface IExpenses {
  [expenses: string]: any;
}

interface IExpense {
  date: Date;
}

export const Expenses = (props: IExpenses) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense: IExpense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
