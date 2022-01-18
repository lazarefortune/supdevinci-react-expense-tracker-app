import Layout from "../src/components/Layout"
import { TransactionList } from "../src/components/TransactionList"
import { AddTransaction } from "../src/components/AddTransaction"

function Home() {
  return (
    <Layout>
      <div className="container">
        <TransactionList></TransactionList>
        <hr />
        <AddTransaction></AddTransaction>
      </div>
    </Layout>
  )
}

export default Home
