import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map((transaction) => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2)

  return (
    <tr>
        <td className="money plus d-flex justify-content-between">
          <span>TOTAL</span>
          <span className="text-success">{income} €</span>
        </td>
        <td className="money minus">
          <span>TOTAL</span>
          <span className="text-danger">{expense} €</span>
        </td>
    </tr>
  )
}
