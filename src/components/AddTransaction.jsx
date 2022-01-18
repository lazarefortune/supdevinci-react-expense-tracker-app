import React, { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalState"
import { useFormik } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  text: Yup.string().required("La description est obligatoire").min(3, "La description doit avoir au minimum 3 caractères"),
  amount: Yup.number().typeError("Veuillez saisir un montant valide").required("Le montant est obligatoire")
})

export const AddTransaction = () => {

  const { addTransaction } = useContext(GlobalContext)

  const initialValues = {
    text: "",
    amount: 0
  }

  function expenseSubmit(formValues) {
    const { text, amount } = formValues

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    }

    addTransaction(newTransaction)
  }

  const formik = useFormik({
    initialValues,
    onSubmit: expenseSubmit,
    validationSchema
  })

  const { text, amount } = formik.values

  return (
    <>
      <h5>Add expense</h5>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className="form-group">
            <label htmlFor="text">Description</label>
            <input
              type="text"
              name="text"
              { ...formik.getFieldProps("text")}
              placeholder="Enter text..."
              className="form-control"
            />
            {
              formik.errors.text && formik.touched.text && <span className="text-danger">{formik.errors.text}</span>
            }
          </div>
          <div className="form-group my-2">
            <label htmlFor="amount">Amount (€)</label>
            <input
              type="number"
              name="amount"
              { ...formik.getFieldProps("amount")}
              placeholder="Enter amount..."
              className="form-control"
            />
            {
              formik.errors.amount && formik.touched.amount && <span className="text-danger">{formik.errors.amount}</span>
            }
          </div>
          <button className="btn btn-primary">Add expense</button>
        </div>
      </form>
    </>
  )
}
