import React from 'react'
import { Header } from "../../header/Header";
import { Footer } from "../../footer/Footer";
import styles from './Layout.module.css'

export const Layout = ({children}) => {
  return (
    <>
    <Header/>
      <main>
        <div className={styles.container}>
          {children}
        </div>
      </main>
    <Footer/>
    </>
  )
}
