import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Container from "../components/container"

export default ({ data: { markdownRemark } }) => (
  <div>
    <Helmet title={markdownRemark.frontmatter.title}></Helmet>
    <Container
      dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
    ></Container>
  </div>
)

export const query = graphql`
  query {
    markdownRemark(frontmatter: { page: { eq: "frontend" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`
