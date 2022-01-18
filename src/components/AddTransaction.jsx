import React, { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalState"

export const AddTransaction = () => {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = (e) => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    }

    addTransaction(newTransaction)
  }

  return (
    <>
      <h5>Add expense</h5>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Description</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            className="form-control"
          />
          <div className="form-group my-2">
            <label htmlFor="amount">Amount (€)</label>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Add expense</button>
        </div>
      </form>
    </>
  )
}
