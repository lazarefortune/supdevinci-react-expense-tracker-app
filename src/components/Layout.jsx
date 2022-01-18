import styles from "./layout.module.css"
import Head from "next/head"
import Link from "next/link"
import { GlobalProvider } from "../context/GlobalState"


export const siteTitle = "Next.js Sample Website example"

const Layout = ({ children, home }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Expense Tracker application"
        />
      </Head>
      <GlobalProvider>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <div className="container-fluid">
            <Link href="/">
              <a className="navbar-brand">Accueil</a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link href="/achats">
                    <a className="nav-link active" aria-current="page">
                      Achats
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/achats/app">
                    <a className="nav-link" href="#">
                      App
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="container">
          {children}
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}
        </main>
      </GlobalProvider>
    </>
  )
}

export default Layout
