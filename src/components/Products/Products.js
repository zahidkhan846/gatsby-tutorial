import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import classes from "./Products.module.css"
import Image from "gatsby-image"

const Products = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProduct {
        nodes {
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          id
          title
          price
          slug
        }
      }
    }
  `)

  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <section className={classes.products}>
      {products.map(product => (
        <article key={product.id}>
          <Image fluid={product.image.fluid} alt={product.title} />
          <h3>
            {product.title} <span>${product.price}</span>
          </h3>
          <Link to={`/products/${product.slug}`}>
            Know More About {product.title}
          </Link>
        </article>
      ))}
    </section>
  )
}
export default Products
