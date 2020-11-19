import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../HOC/Layout/Layout"
import "./ProductTemplate.css"

const ProductDetail = ({
  data: {
    product: {
      title,
      price,
      image: { fixed },
      info: { info },
    },
  },
}) => (
  <Layout>
    <div className="product">
      <h2>{title}</h2>
      <section className="product-detail">
        <article>
          <Image fixed={fixed} />
        </article>
        <article>
          <h3>${price}</h3>
          <h3>Product Detail</h3> <p>{info}</p>
          <Link to="/products">Products</Link>
          <Link to="/continue">Continue</Link>
        </article>
      </section>
    </div>
  </Layout>
)

export const query = graphql`
  query MyProductQuery($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ProductDetail
