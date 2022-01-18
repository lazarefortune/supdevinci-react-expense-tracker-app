import React, { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"

const initialState = {
  transactions: [
    { id: 1, text: "Buy water", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Buy fruit", amount: -40 },
    { id: 4, text: "Sell Fifa", amount: 150 },
  ],
}

export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Add transaction
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
