import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map((transaction) => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <tr>
      <td>Result</td>
      <td className={total < 0 ? "text-danger" : "text-success"}>{total} €</td>
    </tr>
  )
}
