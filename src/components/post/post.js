import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../layout/layout"
import Toc from "../toc/toc"
import PostHeader from "../post-header/post-header"

const Post = ({ location, data }) => {
  const { tableOfContents, headings, body, frontmatter } = data.mdx
  return (
    <Layout location={location}>
      <PostHeader
        title={frontmatter.title}
        description={frontmatter.description}
      />
      <Toc headings={tableOfContents.items} />
      <MDXRenderer headings={headings}>{body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      body
      frontmatter {
        title
        description
        date(fromNow: true)
      }
      headings {
        value
      }
      tableOfContents
    }
  }
`

export default Post
