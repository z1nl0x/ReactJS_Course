import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 300.57,
      date: new Date(2022, 6, 22),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 1500.33,
      date: new Date(2022, 6, 23),
    },
    {
      id: "e3",
      title: "New Desk (Wooden)",
      amount: 500.49,
      date: new Date(2022, 6, 24),
    },
    {
      id: "e4",
      title: "PS5",
      amount: 900.77,
      date: new Date(2022, 6, 25),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
