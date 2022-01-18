import React from "react"

export const Transaction = ({ transaction }) => {
//   const sign = transaction.amount < 0 ? "-" : "+"

  return (
    // <li className={transaction.amount < 0 ? "minus" : "plus"}>
    //   {transaction.text}
    //   <span className="">
    //     {sign}
    //     {Math.abs(transaction.amount)}
    //   </span>
    //   </li>  
    <tr>
      <td className={transaction.amount < 0 ? "text-danger" : "text-success"}>
        {transaction.amount >= 0 ? transaction.amount + " € " : null}
        {transaction.amount >= 0 ? transaction.text : null}
      </td>
      <td className={transaction.amount < 0 ? "text-danger" : "text-success"}>
        {transaction.amount < 0 ? transaction.amount + " € " : null}
        {transaction.amount < 0 ? transaction.text : null}
      </td>
    </tr>
  )
}
