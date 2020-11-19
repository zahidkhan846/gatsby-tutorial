import React from "react"
import Products from "../components/Products/Products"
import Layout from "../HOC/Layout/Layout"

const products = () => {
  return (
    <Layout>
      <h1>this is products page</h1>
      <Products />
    </Layout>
  )
}
export default products
