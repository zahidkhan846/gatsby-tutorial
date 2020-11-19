import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const GetData = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          data
          description
          title
          person {
            age
            name
          }
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata
  const { name } = data.site.siteMetadata.person

  return (
    <div>
      <h2>{title}</h2>
      <h3>{name}</h3>
      <p>
        GitHub: Where the world builds software · GitHubgithub.com GitHub is
        where over 50 million developers shape the future of software, together.
        Contribute to the open source community, manage your Git repositories,
        ... You visited this page on 31/10/20.
      </p>
    </div>
  )
}

export default GetData
