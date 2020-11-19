import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import img from "../../images/img/img (3).jpg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "img/img (3).jpg" }) {
      childImageSharp {
        fixed(width: 350, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "img/img (2).jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export const Images = () => {
  const data = useStaticQuery(getImages)

  return (
    <>
      <section className="images">
        <article className="image">
          <h3>BASIC IMAGE</h3>
          <img src={img} alt="img3" style={{ width: "100%" }} />
        </article>
        <article className="image">
          <h3>Fixed IMAGE/blur</h3>
          <Image fixed={data.fixed.childImageSharp.fixed} />
        </article>
        <article className="image">
          <h3>FLUID IMAGE/svg</h3>
          <Image fluid={data.fluid.childImageSharp.fluid} />
        </article>
      </section>
    </>
  )
}
